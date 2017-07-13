/**
 * This file loads the required components and services
 * as well as the Angular dependencies and environment configuration
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Collision } from '../DatesAndCollisions/CollisionDetector';

import * as moment from 'moment-timezone';
import * as Holidays from 'date-holidays';

import { CustomValidators } from '../validation/custom-validators';
import { StorageService } from '../storage/storage.service';

import { TranslateService } from '@ngx-translate/core';
/** A class used to manage multiple appointments */
@Component({
  selector: 'rac-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
  providers: [AppointmentsService]
})
export class CreatorComponent implements OnInit {
  appointments: Appointment[] = [];
  timeZoneNames: any;
  visible: boolean[] = [true];
  public valid: boolean[][];
  public collisions: Collision[] = [];

  /** constructs a CreatorComponent */
  constructor(private fb: FormBuilder, private appointmentsService: AppointmentsService, private translate: TranslateService,
    private storage: StorageService) {
    this.timeZoneNames = moment.tz.names();
  }
  /** gets all saved appointments */
  getAppointments(): Promise<void> {
    return this.appointmentsService.getAppointments().then(appointments => {
      this.appointments = appointments;
      if (this.appointments.length < 1) {
        this.addAppointment();
      }
    });
  }

  ngOnInit(): void {
    this.getAppointments();
  }
  /** generates and saves a iCal file */
  generateAndSaveICAL() {
    // check for validity of inputs
    for (const appointment of this.appointmentsService.events) {
      for (const valid of appointment.valid) {
        if (!valid) {
          alert(this.translate.instant('INVALID INPUTS'));
          return;
        }
      }
    }
    this.storage.saveText(this.appointmentsService.getICalString().toString());
    this.collisions = this.appointmentsService.getCollisions();
  }
  /** adds an appointment form */
  addAppointment(): void {
    this.appointmentsService.addAppointment(null);
    this.visible[this.visible.length] = true;
  }


  /**
   * removes an appointment form
   * @param pos the position in the appointments array
   */
  removeAppointment(appointment: Appointment, pos: number) {
    this.appointmentsService.removeAppointment(appointment);
    this.visible.splice(pos , 1);
  }
}
