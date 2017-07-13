/**
 * This file contains a service, which handles multiple appointments.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Injectable } from '@angular/core';
import { APPOINTMENTS } from './mock-appointments';
import { StorageService } from '../storage/storage.service';
import { CollisionDetector, Collision } from '../DatesAndCollisions/CollisionDetector';

import * as ICalGenerator from 'ical-generator';
import { day } from 'ical-generator';
import { Appointment } from './appointment';
import { AlarmData } from './alarmData';
import * as moment from 'moment-timezone';
import * as Holidays from 'date-holidays';
/**
 * This Service holds and grants access onto multiple appointments.
 */
@Injectable()
export class AppointmentsService {
  public events: Appointment[] = [];
  private collisions: Collision[] = new Array<Collision>();

/**
 * contructor initializes Storage
 */
  constructor(private StorageService: StorageService) {
    // this.events = APPOINTMENTS;
  }

/**
 * gets the appointment data and returns it as array
 */
  public getAppointments(): Promise<Appointment[]> {
    return Promise.resolve(this.events);
  }

/**
 * gets appointment data and returns a default appointment
 */
  public addAppointment(appointment: Appointment): void {
    if (appointment != null) {
      this.events.push(appointment);
    } else {
      this.events.push(this.defaultAppointment());
    }
  }
/**
 * gets the appointment data and removes it
 */
  public removeAppointment(appointment: Appointment): void {
    const index = this.events.indexOf(appointment);
    if (index > -1) {
      this.events.splice(index, 1);
    }
  }
/**
 * initializes the data for the output of the data
 */
  private initializeCalendar(): ICalGenerator.ICalCalendar {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: this.StorageService.settings.timeZone === 'floating' ? undefined : this.StorageService.settings.timeZone
    });
    return calendar;
  }
/**
 * gets the data from the events , returns an ICal-String
 */
  public getICalString(): string {
    const calendar = this.initializeCalendar();

    for (const event of this.events) {
      this.addEventToCalendar(calendar, event);
    }

    return calendar.toString();
  }
/**
 * creats the format for the an appointment in the formular , returns the format
 */
  defaultAppointment(): Appointment {
    const offset = moment().utcOffset();
    const start = moment.utc().add(offset, 'minutes').startOf('hour');
    const end = start.clone().add(1, 'hour');
    const app = <Appointment>{
      summary: '',
      start: start.toDate(),
      end: end.toDate(),
      description: '',
      status: 'confirmed',
      timezone: 'floating',
      recurringSettings: {
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
        untilDate: moment.utc().format('YYYY-MM-DD'),
        exclusions: [],
      },
      valid: [false, true, true, true]
    };
    return app;
  }
/** gets Month and year, gives out the numbers of days that given month has */
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
 * gets the data from the events , returns an ICal-String
 */
  public addEventToCalendar(calendar: ICalGenerator.ICalCalendar, event: Appointment): void {
    const start = new Date(event.start);
    const end = new Date(event.end);

    const events: ICalGenerator.ICalEvent[] = [];

    // add eventss to calendar
    if (event.recurringSettings.frequency === 'NEVER') {

      // add a single non-repeating events to calendar
      events[0] = calendar.createEvent({
        start: start,
        end: end,
        stamp: new Date(),
        summary: event.summary,
        location: event.location,
        description: event.description,
        allDay: event.allDay,
        status: event.status,
        timezone: event.timezone,
        floating: event.floating
      });

    } else if (event.recurringSettings.frequency === 'DAILY' || (event.recurringSettings.frequency === 'MONTHLY' &&
    event.recurringSettings.repByMonthly === 'MONTH') || (event.recurringSettings.frequency === 'YEARLY' &&
    event.recurringSettings.repByYearly === 'DAYMONTHYEAR')) {

      // add a single repeating events to calendar
      events[0] = calendar.createEvent({
        start: start,
        end: end,
        stamp: new Date(),
        summary: event.summary,
        location: event.location,
        description: event.description,
        allDay: event.allDay,
        status: event.status,
        repeating: {
          freq: event.recurringSettings.frequency,
          count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
          interval: event.recurringSettings.interval,
          until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
        },
        timezone: event.timezone,
        floating: event.floating
      });

    } else if (event.recurringSettings.frequency === 'WEEKLY') {

      // add multiple (up to 7) eventss that repeat weekly to calendar
      const weekdays = [];
      weekdays[0] = event.recurringSettings.sunday;
      weekdays[1] = event.recurringSettings.monday;
      weekdays[2] = event.recurringSettings.tuesday;
      weekdays[3] = event.recurringSettings.wednesday;
      weekdays[4] = event.recurringSettings.thursday;
      weekdays[5] = event.recurringSettings.friday;
      weekdays[6] = event.recurringSettings.saturday;
      const byDayWeek = [];
      if (weekdays[0]) {
        byDayWeek[byDayWeek.length] = 'su';
      }
      if (weekdays[1]) {
        byDayWeek[byDayWeek.length] = 'mo';
      }
      if (weekdays[2]) {
        byDayWeek[byDayWeek.length] = 'tu';
      }
      if (weekdays[3]) {
        byDayWeek[byDayWeek.length] = 'we';
      }
      if (weekdays[4]) {
        byDayWeek[byDayWeek.length] = 'th';
      }
      if (weekdays[5]) {
        byDayWeek[byDayWeek.length] = 'fr';
      }
      if (weekdays[6]) {
        byDayWeek[byDayWeek.length] = 'sa';
      }
      events[0] = calendar.createEvent({
        start: event.start,
        end: event.end,
        stamp: new Date(),
        summary: event.summary,
        location: event.location,
        description: event.description,
        allDay: event.allDay,
        status: event.status,
        repeating: {
          freq: event.recurringSettings.frequency,
          byDay: byDayWeek,
          count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
          interval: event.recurringSettings.interval,
          until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
        },
        timezone: event.timezone,
        floating: event.floating
      });

    } else if (event.recurringSettings.frequency === 'MONTHLY') {

      if (event.recurringSettings.repByMonthly === 'MONTHINV') {
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byMonthDay: [-1],
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      } else if (event.recurringSettings.repByMonthly === 'WEEK') {
        const count = (start.getDate() - (start.getDate() % 7)) / 7 + 1;
        const weekdays = [count + 'SU', count + 'MO', count + 'TU', count + 'WE', count + 'TH', count + 'FR', count + 'SA'] as day[];
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: [weekdays[event.start.getDay()]],
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      } else if (event.recurringSettings.repByMonthly === 'WEEKINV') {
        const days = this.getDaysInMonth(event.start.getDate(), event.start.getFullYear()) - event.start.getDate();
        const count = -(((days - (days % 7)) / 7) + 1);
        const weekdays = [count + 'SU', count + 'MO', count + 'TU', count + 'WE', count + 'TH', count + 'FR', count + 'SA'] as day[];
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: [weekdays[event.start.getDay()]],
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      } else if (event.recurringSettings.repByMonthly === 'WORK') {
        const currentDate = new Date(start);
        currentDate.setDate(1);
        currentDate.setMonth(start.getMonth());
        currentDate.setFullYear(start.getFullYear());
        const isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
        let workdays = 1;
        while (currentDate.valueOf() < start.valueOf()) {
          if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            workdays++;
          } else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
            workdays++;
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
        let daysArray = [];
        if (isWorkDay) {
          daysArray = ['MO', 'TU', 'WE', 'TH', 'FR'];
        } else {
          daysArray = ['SA', 'SU'];
        }
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: daysArray,
            bySetPos: workdays,
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      }else if (event.recurringSettings.repByMonthly === 'WORKINV') {
        const currentDate = new Date(start);
        currentDate.setDate(this.getDaysInMonth(start.getMonth(), start.getFullYear()));
        currentDate.setMonth(start.getMonth());
        currentDate.setFullYear(start.getFullYear());
        const isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
        let workdays = 1;
        while (currentDate.valueOf() > start.valueOf()) {
          if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            workdays++;
          } else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
            workdays++;
          }
          currentDate.setDate(currentDate.getDate() - 1);
        }
        let daysArray = [];
        if (isWorkDay) {
          daysArray = ['MO', 'TU', 'WE', 'TH', 'FR'];
        } else {
          daysArray = ['SA', 'SU'];
        }
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: daysArray,
            bySetPos: -workdays,
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      }

    } else if (event.recurringSettings.frequency === 'YEARLY') {

      // add multiple eventss to calendar which repeat every x-th weekday day of a year (Every second friday of the year)
      if (event.recurringSettings.repByYearly === 'WEEKYEAR') {
        const count = (start.getDate() - (start.getDate() % 7)) / 7 + 1;
        const weekdays = [count + 'SU', count + 'MO', count + 'TU', count + 'WE', count + 'TH', count + 'FR', count + 'SA'] as day[];
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: [weekdays[event.start.getDay()]],
            byMonth: [start.getMonth() + 1],
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      } else if (event.recurringSettings.repByYearly === 'DAYMONTHYEARINV') {
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
            byMonth: [start.getMonth() + 1],
            bySetPos: -1,
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      } else if (event.recurringSettings.repByYearly === 'WEEKINVYEAR') {
        const days = this.getDaysInMonth(event.start.getDate(), event.start.getFullYear()) - event.start.getDate();
        const count = -(((days - (days % 7)) / 7) + 1);
        const weekdays = [count + 'SU', count + 'MO', count + 'TU', count + 'WE', count + 'TH', count + 'FR', count + 'SA'] as day[];
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: [weekdays[event.start.getDay()]],
            byMonth: [start.getMonth() + 1],
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      } else if (event.recurringSettings.repByYearly === 'WORKYEAR') {
        const currentDate = new Date(start);
        currentDate.setDate(1);
        currentDate.setMonth(start.getMonth());
        currentDate.setFullYear(start.getFullYear());
        const isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
        let workdays = 1;
        while (currentDate.valueOf() < start.valueOf()) {
          if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            workdays++;
          } else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
            workdays++;
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
        let daysArray = [];
        if (isWorkDay) {
          daysArray = ['MO', 'TU', 'WE', 'TH', 'FR'];
        } else {
          daysArray = ['SA', 'SU'];
        }
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: daysArray,
            byMonth: [start.getMonth() + 1],
            bySetPos: workdays,
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      } else if (event.recurringSettings.repByYearly === 'WORKINVYEAR') {
        const currentDate = new Date(start);
        currentDate.setDate(this.getDaysInMonth(start.getMonth(), start.getFullYear()));
        currentDate.setMonth(start.getMonth());
        currentDate.setFullYear(start.getFullYear());
        const isWorkDay = start.getDay() !== 0 && start.getDay() !== 6;
        let workdays = 1;
        while (currentDate.valueOf() > start.valueOf()) {
          if (isWorkDay && currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            workdays++;
          } else if (!isWorkDay && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
            workdays++;
          }
          currentDate.setDate(currentDate.getDate() - 1);
        }
        let daysArray = [];
        if (isWorkDay) {
          daysArray = ['MO', 'TU', 'WE', 'TH', 'FR'];
        } else {
          daysArray = ['SA', 'SU'];
        }
        events[0] = calendar.createEvent({
          start: event.start,
          end: event.end,
          stamp: new Date(),
          summary: event.summary,
          location: event.location,
          description: event.description,
          status: event.status,
          allDay: event.allDay,
          repeating: {
            freq: event.recurringSettings.frequency,
            byDay: daysArray,
            byMonth: [start.getMonth() + 1],
            bySetPos: -workdays,
            count: event.recurringSettings.ends === 'COUNT' ? event.recurringSettings.count : undefined,
            interval: event.recurringSettings.interval,
            until: event.recurringSettings.ends === 'UNTIL' ? event.recurringSettings.untilDate : undefined,
          },
          timezone: event.timezone,
          floating: event.floating
        });
      }
    }

    // get exclusion data
    const exclusionDates: Date[] = [];
    const holidayCountries: Holidays.Country[] = [];
    for (const exclusion of event.recurringSettings.exclusions) {
      if (exclusion.type === 'date') {
        exclusionDates.push(new Date(exclusion.date));
      } else if (exclusion.type === 'holidays') {
        holidayCountries.push({
          country: exclusion.holiday_countries,
          state: exclusion.holiday_states,
          region: exclusion.holiday_regions
        });
      }
    }
    this.collisions = [];
    // write collisions to excluded dates
    for (const ev of events) {
      const repData: ICalGenerator.RepeatingData = ev.repeating();
      const iCalEventData: ICalGenerator.EventData = ev.toJSON();

      if (iCalEventData.repeating !== undefined) {
        const collisionDetector = new CollisionDetector(holidayCountries, exclusionDates, this.StorageService.settings.language);
        const cols: Collision[] = collisionDetector.getCollisions(iCalEventData);

        if (this.collisions.length === 0) {
          this.collisions = cols;
        } else {
          this.collisions.concat(cols);
        }
        const exDates = new Array<Date>();

        for (const col of cols) {
          exDates.push(col.date);
        }

        repData.exclude = exDates;
        ev.repeating(repData);
      }
    }


    // add alarm to all events
    for (let i = 0; i < events.length; i++) {
      event.alarms.forEach((val: AlarmData) => {
          if (val.repeat > 1) {
            events[i].createAlarm({
              type: val.type,
              trigger: moment(start).clone().subtract(val.triggerDelay, val.triggerUnit).toDate(),
              repeat: val.repeat,
              interval: val.interval > 0 ? (val.interval * 60) : 1,
              description: val.description,
            });
          } else {
            events[i].createAlarm({
              type: val.type,
              trigger: moment(start).clone().subtract(val.triggerDelay, val.triggerUnit).toDate(),
              description: val.description,
            });
          }
        }
      );
    }
  }
  /**
   * gets the collision array
   *  @returns collision
   */
  public getCollisions(): Collision[] {
    return this.collisions;
  }
}
