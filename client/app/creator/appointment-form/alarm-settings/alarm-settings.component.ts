/**
 * This file contains a service, which handles multiple alarms.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AlarmData } from '../../alarmData';
import * as moment from 'moment-timezone';
import { Subscription } from 'rxjs/Subscription';
import { Appointment } from '../../appointment';
import { StorageService } from '../../../storage/storage.service';
import { TranslateService } from '@ngx-translate/core';

/**
 * A service handling multiple alarms.
 */
@Component({
  selector: 'rac-alarm-settings',
  templateUrl: './alarm-settings.component.html',
  styleUrls: ['./alarm-settings.component.scss']
})
export class AlarmSettingsComponent implements OnChanges, OnInit, OnDestroy {
  @Input() appointment: Appointment;
  alarms: AlarmData[];
  /** used to get data from html formular */
  alarmsForm: FormGroup;
  private subscription: Subscription[] = [];

  /** constructs a AdvancedSettingsComponent */
  constructor(private fb: FormBuilder, private storage: StorageService, private translate: TranslateService) {
    this.createForm();
  }
 /** when alram values changes it validates it */
  ngOnInit(): void {
    this.subscription[0] = (this.alarmsForm.valueChanges.subscribe(data => this.endValidation(data)));
  }

 /** checks if alarm is in the object, and if not adds it */
  ngOnChanges(): void {
    if (!this.appointment.hasOwnProperty('alarms')) {
      this.appointment.alarms = [];
    }

    this.alarms = this.appointment.alarms;
    this.setAlarms(this.alarms);
  }

  /** creates the alarm form */
  createForm(): void {
    this.alarmsForm = this.fb.group({
      alarms: this.fb.array([])
    });
  }

  /** destroys the subcribtion */
  ngOnDestroy() {
    for (const sub of this.subscription) {
      sub.unsubscribe();
    }
  }

  /** gets alarm data and validates it */
  endValidation(data: any) {
    this.appointment.valid[2] = this.alarmsForm.valid;
  }

  /** creates alarm */
  public addAlarm(): void {
    const newAlarm = <AlarmData>{
      type: 'display',
      triggerDelay: 10,
      triggerUnit: 'MINUTES',
      repeat: 1,
      intervalMinutes: 5
    };
    this.recalculateTrigger(newAlarm);
    this.recalculateInterval(newAlarm);
    this.alarms.push(newAlarm);
    this.setAlarms(this.alarms);
  }

  /** removes one alarm */
  public removeAlarm(alarm: AlarmData): void {
    const index = this.alarms.indexOf(alarm);
    if (index > -1) {
      this.alarms.splice(index, 1);
    }
  }

  /** gets alarm data and creates an array */
  setAlarms(alarms: AlarmData[]): void {
    const alarmFGs = alarms.map(alarm => this.fb.group({
        type: alarm.type,
        triggerDelay: [
          alarm.triggerDelay, [
            Validators.required
          ]
        ],
        triggerUnit: alarm.triggerUnit,
        repeat: [
          alarm.repeat, [
            Validators.required
          ]
        ],
        intervalMinutes: alarm.interval / 60,
        description: alarm.description,
    }));
    const alarmFormArray = this.fb.array(alarmFGs);
    for (let i = 0; i < alarmFormArray.length; i++) {
      const xy = alarmFormArray.at(i) as FormGroup;
      this.subscription[i + 1] = (xy.controls['repeat'].valueChanges.subscribe(() => {
        if (xy.controls['repeat'].value > 1) {
          xy.controls['intervalMinutes'].setValidators([Validators.required, Validators.min(1)]);
        } else {
          xy.controls['intervalMinutes'].setValidators([]);
        }
      }));
    }
    this.alarmsForm.setControl('alarms', alarmFormArray);
  }

  /** gets the alarm distanze and recalculates it as date */
  public recalculateTrigger(alarm): void {
    const start = new moment(this.appointment.start);
    alarm.trigger = start.subtract(alarm.triggerDelay, alarm.triggerUnit).toDate();
  }

  /** get alarm intervall and caculates it to minutes */
  public recalculateInterval(alarm): void {
    alarm.interval = alarm.intervalMinutes * 60;
  }

}
