/**
 * This file contains the Advanced Settings.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { StorageService } from '../../../storage/storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment-timezone';
import { Appointment } from '../../appointment';

/**
 * Component to handle all settings contained in 'other' section.
 */
@Component({
  selector: 'rac-advanced-settings',
  templateUrl: './advanced-settings.component.html',
  styleUrls: ['./advanced-settings.component.scss']
})

export class AdvancedSettingsComponent implements OnInit, OnChanges {
  @Input() appointment: Appointment;

  private hideSettings = true;
  private timeZoneNames: string[];
  status: string;
  timezone: string;
  private subscription: Subscription = new Subscription();


  advancedForm: FormGroup;
  /** constructs a AdvancedSettingsComponent */
  constructor(private fb: FormBuilder, private storage: StorageService, private translate: TranslateService) {
    this.timeZoneNames = moment.tz.names();
  }
  /** creates settings form */
  ngOnInit() {
    this.createForm();
    this.status = this.appointment.status;
    this.timezone = this.storage.settings.timeZone;
    this.appointment.timezone = this.timezone === 'floating' ? undefined : this.timezone;
    this.appointment.floating = this.timezone === 'floating' ? true : undefined;
    this.subscription.add(this.advancedForm.valueChanges.subscribe(data => this.endValidation(data)));
  }

  /** checks is timezone is changend if not its set floating, gets status change */
  ngOnChanges() {
    this.timezone = this.appointment.floating ? 'floating' : this.appointment.timezone;
    this.status = this.appointment.status;
  }

  /** gets the data, checks if the form is valid */
  endValidation(data: any) {
    this.appointment.valid[3] = this.advancedForm.valid;
  }

  /** sets timezone and status if changed */
  updateAppointment(): void {
    this.appointment.status = this.status;
    this.appointment.floating = this.timezone === 'floating';
    this.appointment.timezone = this.timezone === 'floating' ? undefined : this.timezone;
  }

  /** creates the settings form */
  private createForm(): void {
    this.advancedForm = this.fb.group({
      status: this.status,
      timezone: this.timezone
    });
  }

}
