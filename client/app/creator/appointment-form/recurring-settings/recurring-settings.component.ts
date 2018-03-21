/**
 * This file contains a description of recurring appointment settings.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Component, Input, OnInit, AfterViewChecked, OnChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Appointment } from '../../appointment';
import { Exclusion } from '../../exclusion';
import { RecurringSettings } from '../../recurring-settings';
import { Subscription } from 'rxjs/Subscription';
import { StorageService } from '../../../storage/storage.service';
import * as Holidays from 'date-holidays';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment-timezone';
import { CollisionDetector } from '../../../DatesAndCollisions/CollisionDetector';
import { DatePickerOptions, DateModel, DatePickerTexts } from 'ng2-datepicker';


/**
 * Description of the structure of how appointments can be repeated.
 */
@Component({
  selector: 'rac-recurring-settings',
  templateUrl: './recurring-settings.component.html',
  styleUrls: ['./recurring-settings.component.scss']
})
export class RecurringSettingsComponent implements OnChanges, OnInit, AfterViewChecked, OnChanges, OnDestroy {
  @Input() appointment: Appointment;
  public recurringSettings: RecurringSettings;
  public exclusions: Exclusion[];
  public hideSettings = true;
  public month: String;
  /** the text displayed in repeats by section if monthly is selected a repeat interval (e.g. Every 23. last) */
  public monthInv: String;
  /** the text displayed in repeats by section if monthly is selected a repeat interval (e.g. Every second tuesday) */
  public week: String;
  /** the text displayed in repeats by section if monthly is selected a repeat interval (e.g. Every second last tuesday) */
  public weekInv: String;
  /** the text displayed in repeats by section if yearly is selected a repeat interval (e.g. Every 23.3.) */
  public dayMonthYear: String;
  /** the text displayed in repeats by section if yearly is selected a repeat interval (e.g. Every 25. tuesday) */
  public weekYear: String;
  /** the text displayed in repeats by section if yearly is selected a repeat interval (e.g. Every 25. last tuesday) */
  public weekInvYear: String;
  /** Contains the Holiday instance of 'date-holidays' framework */
  public hd: any;
  /** Contains strings of all countries provided by date-holidays */
  public countries: any[][];
  /** Contains strings of all states of current country */
  public states: any[][][];
  /** Contains strings of all states of current state and country in given appointment */
  public regions: any[][][];
  /** Determines wether the Selectbox 'States' of given appointment is visible or not */
  public statesVisible: boolean[];
  /** Determines wether the Selectbox 'Regions' of given appointment is visible or not */
  public regionsVisible: boolean[];
  /** Cities (for time zone settings) */
  public cities: string[];
  /** the date format used in the date forms */
  public datePattern = /\d{4}-\d{2}-\d{2}/;
  public work: String;
  public workInv: String;
  public dayMonthYearInv: String;
  public workInvYear: String;
  public workYear: String;

  options: DatePickerOptions;
  enddate: DateModel;
  datepickerTexts: DatePickerTexts;

  recurringForm: FormGroup;
  private subscription: Subscription[] = [];
  /** constructs an appointment form filled with standart values  */
  constructor(private fb: FormBuilder, private storage: StorageService, private translate: TranslateService) {
    this.hd = new Holidays();

    this.options = new DatePickerOptions({initialDate: new Date(), color: this.storage.getColor()});
    this.datepickerTexts = new DatePickerTexts();
    this.countries = this.getCountries();
    this.states = [];
    this.regions = [];
    this.statesVisible = [];
    this.regionsVisible = [];
    this.createForm();
  }

  /** checks selection and updates the form  */
  ngOnInit(): void {
    this.translate.get('SELECT YEAR').subscribe((result: string) => {
      this.datepickerTexts.selectYearText = result;
    });
    this.translate.get('CLEAR').subscribe((result: string) => {
      this.datepickerTexts.clearText = result;
    });
    this.translate.get('TODAY').subscribe((result: string) => {
      this.datepickerTexts.todayText = result;
    });
    this.translate.get('MO').subscribe((result: string) => {
      this.datepickerTexts.mo = result;
    });
    this.translate.get('TU').subscribe((result: string) => {
      this.datepickerTexts.tu = result;
    });
    this.translate.get('WE').subscribe((result: string) => {
      this.datepickerTexts.we = result;
    });
    this.translate.get('TH').subscribe((result: string) => {
      this.datepickerTexts.th = result;
    });
    this.translate.get('FR').subscribe((result: string) => {
      this.datepickerTexts.fr = result;
    });
    this.translate.get('SA').subscribe((result: string) => {
      this.datepickerTexts.sa = result;
    });
    this.translate.get('SU').subscribe((result: string) => {
      this.datepickerTexts.su = result;
    });
    this.translate.get(['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
      'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']).subscribe((result: string[]) => {


      this.datepickerTexts.monthName = Object.keys(result).map(function (key) { return result[key]; });
      this.datepickerTexts = new DatePickerTexts(this.datepickerTexts); // to fire ngOnChanges in DatePicker
    });
    if (!this.appointment.hasOwnProperty('recurringSettings')) {
      this.appointment.recurringSettings = {
        // Default values for form data
        frequency: 'NEVER',
        interval: 1,
        ends: 'NEVER',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        repByMonthly: 'MONTH',
        repByYearly: 'DAYMONTHYEAR',
        count: 1,
        untilDate: moment(new Date()).add(100, 'y').format('YYYY-MM-DD'),
        exclusions: [],
      };
    }
    this.recurringSettings = this.appointment.recurringSettings;
    this.subscription[0] = this.recurringForm.controls['ends'].valueChanges.subscribe((end: String) => {
      if (end === 'COUNT') {
        this.recurringForm.controls['count'].setValidators([Validators.min(1), Validators.required]);
      } else {
        this.recurringForm.controls['count'].setValidators([]);
      }
      this.recurringForm.controls['count'].updateValueAndValidity();
    });
    this.subscription[1] = (this.recurringForm.valueChanges.subscribe(data => this.endValidation(data)));
  }

  /**  */
  ngOnDestroy() {
  }

  /** updates the repeats  */
  ngAfterViewChecked(): void {
    this.updateRepeatsBy();
  }

  /** get the data, checks the validaton of the reccuringsettings */
  public endValidation(data: any) {
    this.appointment.valid[1] = this.recurringForm.valid;
  }

  /** gets event data, checks the end date. Checks if it is not
   * before the start date and updates it
   */
  endDateListener(event: any) {
    if (event !== undefined) {
      const date = moment();
      date.set({
        year: event.year,
        month: event.month - 1,
        date: event.day
      });
      if (date.toDate().valueOf() >= this.appointment.end.valueOf()) {
        this.recurringSettings.untilDate = date.toDate();
      } else {
        const end: moment = new moment(this.appointment.end);
        this.enddate = new DateModel({day: (end.date() + 1) + '', month: (end.month() + 1) + '', year: end.year() + '',
          formatted: end.format('YYYY-MM-DD'), momentObj: new moment(end)});
      }
    }
  }

  /** Checks if there is an object recurringSetttings in the array, if not, adds it. */
  ngOnChanges(): void {
    if (this.appointment.hasOwnProperty('recurringSettings')) {
      if (!this.appointment.recurringSettings.hasOwnProperty('exclusions')) {
        this.appointment.recurringSettings.exclusions = [];
      }

      this.exclusions = this.appointment.recurringSettings.exclusions;
      this.setExclusions(this.exclusions);
    }
  }


  /**
   * used to translate values of the holiday database to an array
   * @return translatet array
   */
  private objectToArray(obj: any): any[][] {
    const result = Object.keys(obj).map(function(e) {
      return [e, obj[e]];
    });
    return result;
  }

  /**
   * returns all countries of the holiday database as an array
   * @return all countries of the holiday database as an array
   */
  public getCountries(): any[][] {
    return this.objectToArray(this.hd.getCountries());
  }

  /**
   * returns all states of the holiday database as an array
   * @return all states of the holiday database as an array
   */
  public getStates(country: string): any[][] {
    const states = this.hd.getStates(country);
    if (states == null || states === undefined) {
      return undefined;
    }
    return this.objectToArray(states);
  }

  /**
   * returns all regions of the holiday database as an array
   * @return all regions of the holiday database as an array
   */
  public getRegions(country: string, state: string): any[][] {
    const regions = this.hd.getRegions(country, state);
    if (regions == null || regions === undefined) {
      return undefined;
    }
    return this.objectToArray(regions);
  }

  /**
   * sets the value for a selectbox filled with all states and grants visibility
   * @param the position of the exclusionsform (see html)
   */
  public showStates(i: number): void {
    const exclusions = this.recurringForm.controls['exclusions'] as FormArray;
    const country = (exclusions.at(i) as FormGroup).controls['holiday_countries'].value as string;
    this.states[i] = this.getStates(country);
    if (this.states[i] !== undefined) {
      this.statesVisible[i] = true;
      this.regionsVisible[i] = false;
      this.appointment.recurringSettings.exclusions[i].holiday_states = this.states[i][0][0];
    } else {
      this.statesVisible[i] = false;
      this.regionsVisible[i] = false;
      this.appointment.recurringSettings.exclusions[i].holiday_states = '';
    }
    this.showRegions(i);
  }

  /**
   * sets the value for a selectbox filled with all regions and grants visibility
   * @param the position of the exclusionsform (see html)
   */
  public showRegions(i: number): void {
    const exclusions = this.recurringForm.controls['exclusions'] as FormArray;
    const country = (exclusions.at(i) as FormGroup).controls['holiday_countries'].value as string;
    const state = (exclusions.at(i) as FormGroup).controls['holiday_states'].value as string;
    this.regions[i] = this.getRegions(country, state);
    if (this.regions[i] !== undefined) {
      this.statesVisible[i] = true;
      this.regionsVisible[i] = true;
      this.appointment.recurringSettings.exclusions[i].holiday_regions = this.regions[i][0][0];
    } else {
      this.regionsVisible[i] = false;
      this.appointment.recurringSettings.exclusions[i].holiday_regions = '';
    }
  }

  /**
   * This method is used to remove an exclusion
   * @param exclusion tells which exclusion has to be removed
   */
  public removeExclusion(exclusion: Exclusion): void {
    const index = this.exclusions.indexOf(exclusion);
    if (index > -1) {
      this.exclusions.splice(index, 1);
    }
  }

  /** creates the reccuring form */
  private createForm(): void {
    this.recurringForm = this.fb.group({
      frequency: 'NEVER' || 'DAILY' || 'WEEKLY' || 'MONTHLY' || 'YEARLY',
      interval: [
        1, [
          Validators.required,
          Validators.min(1),
        ]
      ],
      ends: 'NEVER' || 'COUNT' || 'UNTIL',
      monday: Boolean,
      tuesday: Boolean,
      wednesday: Boolean,
      thursday: Boolean,
      friday: Boolean,
      saturday: Boolean,
      sunday: Boolean,
      repByMonthly: 'MONTH' || 'MONTHINV' || 'WEEK' || 'WEEKINV' || 'WORK' || 'WORKINV',
      repByYearly: 'DAYMONTHYEAR' || 'DAYMONTHYEARINV' || 'WEEKYEAR' || 'WEEKINVYEAR' || 'WORKYEAR' || 'WORKINVYEAR',
      count: Number,
      untilDate: moment(new Date()).add(100, 'y'),
      exclusions: this.fb.array([]),
    });
  }

  /**
   * This method return how many days a month has.
   * @param month the month of which the amount of days is calculated
   * @param year the year of which the amount of days of a month is calculated
   * @return This method return how many days a month has.
   */
  private getDaysInMonth(month: number, year: number): number {
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

  /**
   * This method adds an empty exclusion to the creator form.
   */
  public addExclusion(): void {
    const newExclusion = <Exclusion>{
      type: 'holidays',
      holiday_countries: this.storage.settings.country != null ? this.storage.settings.country : '',
      holiday_states: this.storage.settings.state != null ? this.storage.settings.state : '',
      holiday_regions: this.storage.settings.region != null ? this.storage.settings.region : '',
      date: moment(new Date()).format('YYYY-MM-DD'),
    };
    this.recurringSettings.exclusions.push(newExclusion);
    this.setExclusions(this.recurringSettings.exclusions);
    const length = this.exclusions.length;
    this.showStates(length - 1);
    this.recurringSettings.exclusions[length - 1].holiday_states = this.storage.settings.state != null ? this.storage.settings.state : '';
    this.showRegions(length - 1);
    this.recurringSettings.exclusions[length - 1].holiday_regions =
    this.storage.settings.region != null ? this.storage.settings.region : '';
  }

  /** this method gets the event and an number.
   * sets the date
   */
  setExclusionDate(event: any, i: number): void {
    this.exclusions[i].date = new Date();
    this.exclusions[i].date.setFullYear(event.year, event.month - 1, event.day);
  }

  /** gets all exclusion countries and the date and puts it
   * into and array
   */
  private setExclusions(exclusions: Exclusion[]): void {
    const exclusionFGs = exclusions.map(exclusion => this.fb.group({
        type: exclusion.type,
        holiday_countries: exclusion.holiday_countries,
        holiday_states: exclusion.holiday_states,
        holiday_regions: exclusion.holiday_regions,
        date: exclusion.date,
    }));
    const exclusionsFormArray = this.fb.array(exclusionFGs);
    this.recurringForm.setControl('exclusions', exclusionsFormArray);
  }

  /**
   * This method updates the texts in the repeats-by-section (e.g.: Instead of "weekday of year" the text reads
   * "Every third Friday of the month").
   */
   public updateRepeatsBy(): void {
     const start = new Date(this.appointment.start);
     const currentDate = new Date(start.getTime());
     const day: number = start.getDay();
     let i: number;
     const weekday = new Array(7);
     const month = new Array(12);
     weekday[0] = this.translate.instant('SUNDAY');
     weekday[1] = this.translate.instant('MONDAY');
     weekday[2] = this.translate.instant('TUESDAY');
     weekday[3] = this.translate.instant('WEDNESDAY');
     weekday[4] = this.translate.instant('THURSDAY');
     weekday[5] = this.translate.instant('FRIDAY');
     weekday[6] = this.translate.instant('SATURDAY');
     month[0] = this.translate.instant('JANUARY');
     month[1] = this.translate.instant('FEBRUARY');
     month[2] = this.translate.instant('MARCH');
     month[3] = this.translate.instant('APRIL');
     month[4] = this.translate.instant('MAY');
     month[5] = this.translate.instant('JUNE');
     month[6] = this.translate.instant('JULY');
     month[7] = this.translate.instant('AUGUST');
     month[8] = this.translate.instant('SEPTEMBER');
     month[9] = this.translate.instant('OCTOBER');
     month[10] = this.translate.instant('NOVEMBER');
     month[11] = this.translate.instant('DECEMBER');
     // Monthly

     // repeat by x-th weekday of month
     currentDate.setDate(1);
     while (day !== currentDate.getDay()) {
       currentDate.setDate(currentDate.getDate() + 1);
     }
     let weeks = (start.getDate() - currentDate.getDate()) / 7 + 1;
     this.week = this.translate.instant('EVERY') + ' ';
     if (weeks === 1) {
       this.week = this.week + this.translate.instant('FIRST') + ' ';
     } else if (weeks === 2) {
       this.week = this.week + this.translate.instant('SECOND') + ' ';
     } else if (weeks === 3) {
       this.week = this.week + this.translate.instant('THIRD') + ' ';
     } else if (weeks === 4) {
       this.week = this.week + this.translate.instant('FOURTH') + ' ';
     } else {
       this.week = this.week + this.translate.instant('FIFTH') + ' ';
     }
     this.week = this.week + weekday[day] + ' ' + this.translate.instant('OF THE MONTH');

     // repeat by x-th weekday of month (count from end)
     i = this.getDaysInMonth(start.getMonth(), start.getFullYear());
     currentDate.setDate(i);
     while (day !== currentDate.getDay()) {
       currentDate.setDate(currentDate.getDate() - 1);
     }
     weeks = (currentDate.getDate() - start.getDate()) / 7 + 1;
     this.weekInv = this.translate.instant('EVERY') + ' ';
     if (weeks === 1) {
       this.weekInv = this.weekInv + this.translate.instant('LAST') + ' ';
     } else if (weeks === 2) {
       this.weekInv = this.weekInv + this.translate.instant('SECOND LAST') + ' ';
     } else if (weeks === 3) {
       this.weekInv = this.weekInv + this.translate.instant('THIRD LAST') + ' ';
     } else if (weeks === 4) {
       this.weekInv = this.weekInv + this.translate.instant('FOURTH LAST') + ' ';
     } else {
       this.weekInv = this.weekInv + this.translate.instant('FIFTH LAST') + ' ';
     }
     this.weekInv = this.weekInv + weekday[day] + ' ' + this.translate.instant('OF THE MONTH');

     // repeat by day of month
     this.month = this.translate.instant('EVERY') + ' ' + start.getDate() + '. ' + this.translate.instant('OF THE MONTH');

     // repeat by day of month (count from end)
     this.monthInv = this.translate.instant('EVERY') + ' ';
     this.monthInv = this.monthInv + this.translate.instant('LAST DAY') + ' ' + this.translate.instant('OF THE MONTH');

     // repeat by day workday
     currentDate.setDate(1);
     currentDate.setMonth(start.getMonth());
     currentDate.setFullYear(start.getFullYear());
     let isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
     let workdays = 1;
     while (currentDate.valueOf() < start.valueOf()) {
       if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
         workdays++;
       } else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
         workdays++;
       }
       currentDate.setDate(currentDate.getDate() + 1);
     }
     this.work = this.translate.instant('EVERY') + ' ' + workdays + '. ';
     if (isWorkDay) {
       this.work = this.work + this.translate.instant('WORKDAY') + ' ';
     } else {
       this.work = this.work + this.translate.instant('WEEKENDDAY') + ' ';
     }
     this.work = this.work + this.translate.instant('OF THE MONTH');

     // repeat by day workday INVERTED
     currentDate.setDate(this.getDaysInMonth(start.getMonth() + 1, start.getFullYear()));
     currentDate.setMonth(start.getMonth());
     currentDate.setFullYear(start.getFullYear());
     isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
     workdays = 1;
     while (currentDate.valueOf() > start.valueOf()) {
       if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
         workdays++;
       } else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
         workdays++;
       }
       currentDate.setDate(currentDate.getDate() - 1);
     }
     this.workInv = this.translate.instant('EVERY') + ' ';
     if (workdays !== 1) {
       this.workInv = this.workInv + '' + workdays + '. ';
     }
     if (isWorkDay) {
       this.workInv = this.workInv + this.translate.instant('LAST') + ' ' + this.translate.instant('WORKDAY') + ' ';
     } else {
       this.workInv = this.workInv + this.translate.instant('LAST') + ' ' + this.translate.instant('WEEKENDDAY') + ' ';
     }
     this.workInv = this.workInv + this.translate.instant('OF THE MONTH');


     // yearly

      // repeat by day and month (Every 3.2.)
      this.dayMonthYear = this.translate.instant('EVERY') + ' ' + start.getDate() + '.'
      + (start.getMonth() + 1) + '. ' + this.translate.instant('OF THE YEAR');

      // repeat by last day
      this.dayMonthYearInv = this.translate.instant('EVERY') + ' ' + this.translate.instant('LAST') + ' ' +
      this.translate.instant('DAY') + ' ' + this.translate.instant('OF') + ' ' + month[start.getMonth()];

     // repeat by weekday of year INVERTED
     this.weekInvYear = this.translate.instant('EVERY') + ' ';
     const days = this.getDaysInMonth(start.getDate(), start.getFullYear()) - start.getDate();
     const countInv = -(((days - (days % 7)) / 7) + 1);
     if (countInv === -1) {
       this.weekInvYear = this.weekInvYear + this.translate.instant('LAST') + ' ';
     } else if (countInv === -2) {
       this.weekInvYear = this.weekInvYear + this.translate.instant('SECOND LAST') + ' ';
     } else if (countInv === -3) {
       this.weekInvYear = this.weekInvYear + this.translate.instant('THIRD LAST') + ' ';
     } else if (countInv === -4) {
       this.weekInvYear = this.weekInvYear + this.translate.instant('FOURTH LAST') + ' ';
     } else if (countInv === -5) {
       this.weekInvYear = this.weekInvYear + this.translate.instant('FIFTH LAST') + ' ';
     }
     this.weekInvYear = this.weekInvYear + weekday[start.getDay()] + ' ' +
      this.translate.instant('OF') + ' ';
     this.weekInvYear = this.weekInvYear + month[start.getMonth()];

     // repeat by weekday of year
     this.weekYear = this.translate.instant('EVERY') + ' ';
     const count = (start.getDate() - (start.getDate() % 7)) / 7 + 1;
     if (count === 1) {
       this.weekYear = this.weekYear + this.translate.instant('FIRST') + ' ';
     } else if (count === 2) {
       this.weekYear = this.weekYear + this.translate.instant('SECOND') + ' ';
     } else if (count === 3) {
       this.weekYear = this.weekYear + this.translate.instant('THIRD') + ' ';
     } else if (count === 4) {
       this.weekYear = this.weekYear + this.translate.instant('FOURTH') + ' ';
     } else if (count === 5) {
       this.weekYear = this.weekYear + this.translate.instant('FIFTH') + ' ';
     }
     this.weekYear = this.weekYear + weekday[start.getDay()] + ' ' +
      this.translate.instant('OF') + ' ';
     this.weekYear = this.weekYear + month[start.getMonth()];

     // repeat by day workday
     currentDate.setDate(1);
     currentDate.setMonth(start.getMonth());
     currentDate.setFullYear(start.getFullYear());
     isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
     workdays = 1;
     while (currentDate.valueOf() < start.valueOf()) {
       if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
         workdays++;
       } else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
         workdays++;
       }
       currentDate.setDate(currentDate.getDate() + 1);
     }
     this.workYear = this.translate.instant('EVERY') + ' ' + workdays + '. ';
     if (isWorkDay) {
       this.workYear = this.workYear + this.translate.instant('WORKDAY') + ' ';
     } else {
       this.workYear = this.workYear + this.translate.instant('WEEKENDDAY') + ' ';
     }
     this.workYear = this.workYear + this.translate.instant('OF') + ' ' + month[start.getMonth()];

     // repeat by day workday INVERTED
     currentDate.setDate(this.getDaysInMonth(start.getMonth() + 1, start.getFullYear()));
     currentDate.setMonth(start.getMonth());
     currentDate.setFullYear(start.getFullYear());
     isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
     workdays = 1;
     while (currentDate.valueOf() > start.valueOf()) {
       if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
         workdays++;
       } else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
         workdays++;
       }
       currentDate.setDate(currentDate.getDate() - 1);
     }
     this.workInvYear = this.translate.instant('EVERY') + ' ';
     if (workdays !== 1) {
       this.workInvYear = this.workInvYear + '' + workdays + '. ';
     }
     if (isWorkDay) {
       this.workInvYear = this.workInvYear + this.translate.instant('LAST') + ' ' + this.translate.instant('WORKDAY') + ' ';
     } else {
       this.workInvYear = this.workInvYear + this.translate.instant('LAST') + ' ' + this.translate.instant('WEEKENDDAY') + ' ';
     }
     this.workInvYear = this.workInvYear + this.translate.instant('OF') + ' ' + month[start.getMonth()];
   }
}
