/**
 * This file describes the logic behind the Appointment forms.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as moment from 'moment-timezone';
import { Component, Input, OnChanges, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecurringSettingsComponent } from './recurring-settings/recurring-settings.component';
import { Subscription } from 'rxjs/Subscription';
import { DatePickerOptions, DateModel, DatePickerTexts } from 'ng2-datepicker';
import { StorageService } from '../../storage/storage.service';
import { Appointment } from '../appointment';
import { TranslateService } from '@ngx-translate/core';
import { AppointmentsService } from '../appointments.service';
/**
 * The appointmentforms will be validated, created and initialized.
 */
@Component({
  selector: 'rac-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnChanges, OnInit, OnDestroy {
  @Input() appointment: Appointment;
  @ViewChild(RecurringSettingsComponent) recurring: RecurringSettingsComponent;
  /** says whether the infos in the recurring form are visible or not */
  // public recurringVisible = false;
  /** says whether the infos in the other infos form are visible or not */
  // public otherInfoVisible = false;
  /** used to get data from html formular */
  appointmentForm: FormGroup;
  /** the date format used in the date forms */
  public datePattern = /\d{4}-\d{2}-\d{2}/;
  /** the time format used in the time forms */
  public timePattern = /((0|1)\d|2[0-3]):[0-5]\d/;
  private subscription: Subscription = new Subscription();
  private advancedValid = false;
  private alarmValid = false;
  private recurringValid = false;
  startoptions: DatePickerOptions;
  endoptions: DatePickerOptions;
  datepickerTexts: DatePickerTexts;
  startdate: DateModel;
  enddate: DateModel;
  /** constructs an appointment form filled with standart values */
  constructor(private fb: FormBuilder, private translate: TranslateService, private appointments: AppointmentsService,
    private storage: StorageService) {
      this.datepickerTexts = new DatePickerTexts();
      this.createForm();
  }
/**
 * when someone is typing it starts the validation
 */
  ngOnInit() {
    this.startoptions = new DatePickerOptions({initialDate: this.appointment.start, color: this.storage.getColor()});
    this.endoptions = new DatePickerOptions({initialDate: this.appointment.end, color: this.storage.getColor()});
    this.translate.get('SELECT YEAR').subscribe((result: string) => {
      this.datepickerTexts.selectYearText = result;
    });
    this.translate.get('CLEAR').subscribe((result: string) => {
      this.datepickerTexts.clearText = result;
    });
    this.translate.get('TODAY').subscribe((result: string) => {
      this.datepickerTexts.todayText = result;
    });
    this.translate.get(['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
      'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']).subscribe((result: string[]) => {
      this.datepickerTexts.monthName = Object.keys(result).map(function (key) { return result[key]; });
      this.datepickerTexts = new DatePickerTexts(this.datepickerTexts); // to fire ngOnChanges in DatePicker
    });
    this.subscription.add(this.appointmentForm.valueChanges.subscribe(data => this.endValidation(data)));
  }
/**
 * destroys subcribtion
 */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
/**
 * gets typed data, validats it with form properties
 */
  endValidation(data: any) {
    this.appointment.valid[0] = this.appointmentForm.valid;
  }
  validateStartTime(): void {
     const start = this.appointmentForm.controls['start'] as FormGroup;
    // if (!start.controls['time'].valid) {
    //  this.appointmentForm.get('start.time').setValue(moment.utc(this.appointment.start).format('HH:mm'));
    // }
  }
  validateStartDate(): void {
     const start = this.appointmentForm.controls['start'] as FormGroup;
    // if (!start.controls['date'].valid) {
    //  this.appointmentForm.get('start.date').setValue(moment.utc(this.appointment.start).format('YYYY-MM-DD'));
    // }
  }
  validateEndTime(): void {
    const end = this.appointmentForm.controls['end'] as FormGroup;
    // if (!end.controls['time'].valid) {
    //  this.appointmentForm.get('end.time').setValue(moment.utc(this.appointment.end).format('HH:mm'));
    // }
  }
  validateEndDate(): void {
     const end = this.appointmentForm.controls['end'] as FormGroup;
    // if (!end.controls['date'].valid) {
    //  this.appointmentForm.get('end.date').setValue(moment.utc(this.appointment.end).format('YYYY-MM-DD'));
    // }
  }
  /** sets standart values to html forms */
  createForm(): void {
    this.appointmentForm = this.fb.group({
      summary: [
        null, [
          Validators.required,
          Validators.maxLength(25)
        ]
      ],
      location: [
        null, [
          Validators.maxLength(30)
        ]
      ],
      description: [
        null, []
      ],
      start: this.fb.group({
        date: [
          null, []
        ],
        time: [
          null, [
            Validators.required,
            Validators.pattern(this.timePattern)
          ]
        ]
      }),
      end: this.fb.group({
        date: [
          null, []
        ],
        time: [
          null, [
            Validators.required,
            Validators.pattern(this.timePattern)
          ]
        ]
      }),
      allDay: [ ],
    });
  }
/** gets Month and year, gives out the numbers of days that given month has */
  getDaysInMonth(month: number, year: number): number {
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      return 30;
    } else if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
        return 29;
      } else {
        return 28;
      }
    } else {
      return 31;
    }
  }
/** changes EndDate if StartDate is changed */
  startDateListener(event: any): void {
    if (event !== undefined && this.appointment.start !== undefined) {
      const startDate = moment.utc(this.appointment.start);
      const endDate = moment.utc(this.appointment.end);
      const duration = endDate.diff(startDate);
      startDate.set({
        year: event.year,
        month: event.month - 1,
        date: event.day
      });
      this.appointment.start = startDate.toDate();
      this.appointment.end = startDate.clone().add(duration).toDate();
      const end = moment.utc().toDate();
      end.setFullYear(this.appointment.end.getFullYear(), this.appointment.end.getMonth() + 1, this.appointment.end.getDate());
      const format: string = end.getFullYear() + '-' + (((end.getMonth()) < 10) ? '0' : '')
        + (end.getMonth()) + '-' + (((end.getDate()) < 10) ? '0' : '') + end.getDate();
      this.enddate = new DateModel({day: end.getDate() + '', month: (end.getMonth()) + '', year: end.getFullYear() + '',
        formatted: format, momentObj: moment.utc(end)});
      this.recurring.updateRepeatsBy();
    }
  }
  /** gets enddate of of day, month , year and updates it, if it is befoe the start date */
  endDateListener(event: any): void {
    if (event !== undefined && this.appointment.end !== undefined) {
      this.appointment.end.setFullYear(event.year, event.month - 1, event.day);
      const appEnd = moment.utc(this.appointment.end);
      const appStart = moment.utc(this.appointment.start);
      if (appEnd.year() === appStart.year()
        && appEnd.month() === appStart.month()
        && appEnd.date() < appStart.date()) {
        const startDate = moment.utc(this.appointment.start);
        const endDate = moment.utc(this.appointment.end);
        startDate.set({
          year: endDate.year(),
          month: endDate.month(),
          date: endDate.date()
        });
        this.appointment.start = startDate.toDate();
        this.startdate = new DateModel({day: startDate.date() + '', month: (startDate.month() + 1) + '', year: startDate.year() + '',
          formatted: startDate.format('YYYY-MM-DD'), momentObj: moment(startDate)});
      }
      if (appEnd.toDate().valueOf() < appStart.toDate().valueOf()) { // time's not correct yet
        const startTime = moment.utc(this.appointment.start);
        const endTime = moment.utc(this.appointment.end);
        startTime.set({
          hour: endTime.hour() >= 24 ? 23 : endTime.hour(),
          minute: endTime.minute() >= 60 ? 59 : endTime.minute()
        });
        this.appointment.start = startTime.toDate();
        this.appointmentForm.get('start.time').setValue(startTime.format('HH:mm'));
      }
      if (this.appointment.hasOwnProperty('recurringSettings')) {
        if (this.appointment.end.valueOf() > this.appointment.recurringSettings.untilDate.valueOf()) {
          this.appointment.recurringSettings.untilDate = moment.utc(this.appointment.end).toDate(); // make a copy
          const end: moment = new moment.utc(this.appointment.end);
          this.recurring.enddate = new DateModel({day: (end.date() + 1) + '', month: (end.month() + 1) + '', year: end.year() + '',
            formatted: end.format('YYYY-MM-DD'), momentObj: moment(end)});
        }
      }
    }
  }
  /** if startdate changes updates recurring date */
  onStartDateChange(): void {
    const startDateControl = this.appointmentForm.get('start.date');
    this.recurring.updateRepeatsBy();
  }
  /** if starttime changes updates redcurring time */
  onStartTimeChange(value: string): void {
    if (!value.match(/\d{2}:\d{2}/)) {
      return;
    }
    console.log(value);
    const startTime = moment.utc(this.appointment.start);
    const endTime = moment.utc(this.appointment.end);
    const diffHour = endTime.hour() - startTime.hour();
    const diffMinute = endTime.minute() - startTime.minute();
    let newDate = undefined;
    try {
      newDate = moment.utc(value, 'HH:mm');
    } catch (e) {
      newDate = moment.utc(this.appointment.start);
    }
    if (!newDate.isValid()) {
      newDate = moment.utc(this.appointment.start);
    }
    startTime.set({
      hour: newDate.hour() >= 24 ? 23 : newDate.hour(),
      minute: newDate.minute() >= 60 ? 59 : newDate.minute()
    });
    this.appointment.start = startTime.toDate();
    endTime.set({
      hour: (startTime.hour() + diffHour) >= 24 ? 23 : (startTime.hour() + diffHour),
      minute: (startTime.minute() + diffMinute) >= 60 ? 59 : (startTime.minute() + diffMinute)
    });
    // Update endTime to keep duration
    this.appointment.end = endTime.toDate();
    this.appointmentForm.get('end.time').setValue(endTime.format('HH:mm'));
  }
  /** changes nothing  */
  onEndDateChange(): void {
    const endDateControl = this.appointmentForm.get('end.date');
    // dummy function, lost it's meaning
  }
  /** get end time , changes it if invalid */
  onEndTimeChange(value: string): void {
    if (!value.match(/\d{2}:\d{2}/)) {
      return;
    }
    const endTime = moment.utc(this.appointment.end);
    let newDate = undefined;
    try {
      newDate = moment.utc(value, 'HH:mm');
    } catch (e) {
      newDate = this.appointment.end;
    }
    if (!newDate.isValid()) {
      newDate = this.appointment.end;
    }
    endTime.set({
      hour: newDate.hour() >= 24 ? 23 : newDate.hour(),
      minute: newDate.minute() >= 60 ? 59 : newDate.minute()
    });
    this.appointment.end = endTime.toDate();
    // Update startTime if end would be before start.
    if (this.appointment.end.valueOf() < this.appointment.start.valueOf()) {
      const startTime = moment.utc(this.appointment.start);
      startTime.set({
        hour: endTime.hour() >= 24 ? 23 : endTime.hour(),
        minute: endTime.minute() >= 60 ? 59 : endTime.minute()
      });
      this.appointment.start = startTime.toDate();
      this.appointmentForm.get('start.time').setValue(startTime.format('HH:mm'));
    }
  }
  /** checks for validity of input of time and date form */
  ngOnChanges(): void {
    // This is to prevent 'ExpressionChangedAfterItHasBeenCheckedError'
    this.appointmentForm.patchValue({
      allDay: this.appointment.allDay,
      start: {
        date: moment.utc(this.appointment.start).format('YYYY-MM-DD'),
        time: moment.utc(this.appointment.start).format('HH:mm')
      },
      end: {
        date: moment.utc(this.appointment.end).format('YYYY-MM-DD'),
        time: moment.utc(this.appointment.end).format('HH:mm')
      }
    });
  }
}
