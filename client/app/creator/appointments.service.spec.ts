import * as moment from 'moment-timezone';
import { TestBed, inject } from '@angular/core/testing';
import * as ICalGenerator from 'ical-generator';
import { Appointment } from './appointment';
import { AppointmentsService } from './appointments.service';
import { StorageService } from '../storage/storage.service';

describe('AppointmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentsService, StorageService]
    });
  });

  it('should be created', inject([AppointmentsService], (service:   AppointmentsService) => {
    expect(service).toBeTruthy();
  }));

  it('should add an appointment', inject([AppointmentsService], (service:   AppointmentsService) => {
    const appointments = [
    {
      'summary': '1',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'alarms': []
    },
    {
      'summary': '2',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'alarms': []
    },
    {
      'summary': '3',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'alarms': []
    }];
    service.addAppointment(appointments[0]);
    service.addAppointment(appointments[1]);
    service.addAppointment(appointments[2]);
    expect(service.events).toEqual(appointments);
  }));

  it('should remove an appointment', inject([AppointmentsService], (service:   AppointmentsService) => {
    const appointments = [
    {
      'summary': '1',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'alarms': []
    },
    {
      'summary': '2',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'alarms': []
    },
    {
      'summary': '3',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'alarms': []
    }];
    for (let i = 0; i < appointments.length; i++) {
      service.events[i] = Object.assign({}, appointments[i]); // deep copy
    }
    service.removeAppointment(service.events[1]);
    expect(service.events[0]).toEqual(appointments[0]);
    expect(service.events[1]).toEqual(appointments[2]);
  }));

  it('should return a valid iCal string', inject([AppointmentsService], (service:   AppointmentsService) => {
    const freq: 'NEVER' | 'DAILY' | 'MONTHLY' | 'YEARLY' = 'NEVER';
    const end: 'NEVER' | 'COUNT' | 'UNTIL' = 'NEVER';
    const repByMonthly: 'MONTH' | 'MONTHINV' | 'WEEK' | 'WEEKINV' = 'MONTH';
    const repByYearly: 'DAYMONTHYEAR' | 'WEEKYEAR' | 'WEEKINVYEAR' = 'DAYMONTHYEAR';
    const appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'allDay': true,
      'recurringSettings': {
        'frequency': freq,
        'interval': 1,
        'ends': end,
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': false,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': repByMonthly,
        'repByYearly': repByYearly,
        'count': 1,
        'untilDate': new Date('2017-07-13T16:00:58.220Z'),
        'exclusions': []
      },
      'alarms': []
    };
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    calendar.createEvent({
      start: new Date('2017-07-13T06:00:00.000Z'),
      end: new Date('2017-07-13T16:00:58.220Z'),
      stamp: new Date(),
      summary: 'SEP - TDSE',
      location: 'TU Braunschweig',
      allDay: false,
    });
    spyOn(service, 'initializeCalendar').and.returnValue(calendar);
    service.events = [appointment];
    spyOn(service, 'addEventToCalendar');
    expect(service.getICalString()).toContain('BEGIN:VCALENDAR');
    expect(service.getICalString()).toContain('VERSION:2.0');
    expect(service.getICalString()).toContain('PRODID:-//TU Braunschweig//Duely//EN');
    expect(service.getICalString()).toContain('URL:https://duely.tu-braunschweig.de');
    expect(service.getICalString()).toContain('NAME:Duely');
    expect(service.getICalString()).toContain('X-WR-CALNAME:Duely');
    expect(service.getICalString()).toContain('TIMEZONE-ID:Europe/Berlin');
    expect(service.getICalString()).toContain('X-WR-TIMEZONE:Europe/Berlin');
    expect(service.getICalString()).toContain('BEGIN:VEVENT');
    expect(service.getICalString()).toContain('SEQUENCE:0');
    expect(service.getICalString()).toContain('DTSTART:20170713T060000Z');
    expect(service.getICalString()).toContain('DTEND:20170713T160058Z');
    expect(service.getICalString()).toContain('SUMMARY:SEP - TDSE');
    expect(service.getICalString()).toContain('LOCATION:TU Braunschweig');
    expect(service.getICalString()).toContain('END:VEVENT');
    expect(service.getICalString()).toContain('END:VCALENDAR');
  }));

  it('should add a simple event', inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': '2017-07-13T06:00:00.000Z',
        'end': '2017-07-13T16:00:58.220Z',
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'allDay': true,
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'allDay': true,
      'status': 'tentative',
      'recurringSettings': {
        'frequency': 'NEVER',
        'interval': 1,
        'ends': 'NEVER',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': false,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'MONTH',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 1,
        'untilDate': new Date('2017-07-03'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(new Date(json.events[0].start.valueOf())).toEqual(new Date(correctAppointment.events[0].start));
    expect(new Date(json.events[0].end.valueOf())).toEqual(new Date(correctAppointment.events[0].end));
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].allDay).toEqual(correctAppointment.events[0].allDay);
  }));

  it('should add a recurring (daily, never ending) event', inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2017-07-13T06:00:00.000Z'),
        'end': new Date('2017-07-13T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'DAILY',
          'interval': 1}
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'DAILY',
        'interval': 1,
        'ends': 'NEVER',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': false,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'MONTH',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 1,
        'untilDate': new Date('2017-07-03'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
  }));

  it('should add a recurring (daily, 2 events) event', inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2017-07-13T06:00:00.000Z'),
        'end': new Date('2017-07-13T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'DAILY',
          'interval': 1,
          'count': 2
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'DAILY',
        'interval': 1,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': false,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'MONTH',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 2,
        'untilDate': new Date('2017-07-03'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (daily, until ) event', inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2017-07-13T06:00:00.000Z'),
        'end': new Date('2017-07-13T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'DAILY',
          'interval': 1,
          'until': new Date('2017-07-20T00:00:00.000Z')
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'DAILY',
        'interval': 1,
        'ends': 'UNTIL',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': false,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'MONTH',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 2,
        'untilDate': new Date('2017-07-20'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.until).toEqual(correctAppointment.events[0].repeating.until);
  }));

  it('should add a recurring (weekly-thursday, interval: 2, never-ending) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2017-07-13T06:00:00.000Z'),
        'end': new Date('2017-07-13T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'WEEKLY',
          'byDay': ['TH'],
          'interval': 2
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-13T06:00:00.000Z'),
      'end': new Date('2017-07-13T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'WEEKLY',
        'interval': 2,
        'ends': 'NEVER',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'MONTH',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 2,
        'untilDate': new Date('2017-07-20'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
  }));

  it('should add a recurring (monthly, every 2. wednesday, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2100-10-13T06:00:00.000Z'),
        'end': new Date('2100-10-13T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'MONTHLY',
          'byDay': ['2WE'],
          'interval': 2,
          'count': 2
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2100-10-13T06:00:00.000Z'),
      'end': new Date('2100-10-13T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'MONTHLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEK',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 2,
        'untilDate': new Date('2017-07-20'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (monthly, every last, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2100-10-13T06:00:00.000Z'),
        'end': new Date('2100-10-13T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'MONTHLY',
          'byMonthDay': [-1],
          'interval': 2,
          'count': 2
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2100-10-13T06:00:00.000Z'),
      'end': new Date('2100-10-13T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'MONTHLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'MONTHINV',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 2,
        'untilDate': new Date('2017-07-20'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byMonthDay).toEqual(correctAppointment.events[0].repeating.byMonthDay);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (monthly, every 3. last wednesday, interval 2, never-ending) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2100-10-13T06:00:00.000Z'),
        'end': new Date('2100-10-13T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'MONTHLY',
          'byDay': ['-3WE'],
          'interval': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2100-10-13T06:00:00.000Z'),
      'end': new Date('2100-10-13T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'MONTHLY',
        'interval': 2,
        'ends': 'NEVER',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 2,
        'untilDate': new Date('2017-07-20'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
  }));

  it('should add a recurring (monthly, every 3. last wednesday, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2100-10-13T06:00:00.000Z'),
        'end': new Date('2100-10-13T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'MONTHLY',
          'byDay': ['-3WE'],
          'interval': 2,
          'count': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2100-10-13T06:00:00.000Z'),
      'end': new Date('2100-10-13T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'MONTHLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'DAYMONTHYEAR',
        'count': 2,
        'untilDate': new Date('2017-07-20'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (yearly, every first friday of january, interval 2, never-ending) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2098-01-03T06:00:00.000Z'),
        'end': new Date('2098-01-03T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'YEARLY',
          'byDay': ['1FR'],
          'byMonth': [1],
          'interval': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2098-01-03T06:00:00.000Z'),
      'end': new Date('2098-01-03T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'YEARLY',
        'interval': 2,
        'ends': 'UNTIL',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'WEEKYEAR',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.byMonth).toEqual(correctAppointment.events[0].repeating.byMonth);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
  }));

  it('should add a recurring (yearly, every first wednesday of january, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2098-01-01T06:00:00.000Z'),
        'end': new Date('2098-01-01T16:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'YEARLY',
          'byDay': ['1WE'],
          'byMonth': [1],
          'interval': 2,
          'count': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2098-01-01T06:00:00.000Z'),
      'end': new Date('2098-01-01T16:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'YEARLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'WEEKYEAR',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.byMonth).toEqual(correctAppointment.events[0].repeating.byMonth);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (yearly, every second last friday, interval 2, never-ending) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2098-12-19T07:00:00.000Z'),
        'end': new Date('2098-12-19T17:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'YEARLY',
          'byDay': ['-2FR'],
          'byMonth': [12],
          'interval': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2098-12-19T07:00:00.000Z'),
      'end': new Date('2098-12-19T17:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'YEARLY',
        'interval': 2,
        'ends': 'UNTIL',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'WEEKINVYEAR',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.byMonth).toEqual(correctAppointment.events[0].repeating.byMonth);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
  }));

  it('should add a recurring (yearly, every last friday, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2098-12-19T07:00:00.000Z'),
        'end': new Date('2098-12-19T17:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'YEARLY',
          'byDay': ['-2FR'],
          'byMonth': [12],
          'interval': 2,
          'count': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2098-12-19T07:00:00.000Z'),
      'end': new Date('2098-12-19T17:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'YEARLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'WEEKINVYEAR',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.byMonth).toEqual(correctAppointment.events[0].repeating.byMonth);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (yearly, last day of december, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2098-12-19T07:00:00.000Z'),
        'end': new Date('2098-12-19T17:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'YEARLY',
          'byDay': ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
          'byMonth': [12],
          'bySetPos': -1,
          'interval': 2,
          'count': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2098-12-19T07:00:00.000Z'),
      'end': new Date('2098-12-19T17:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'YEARLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'DAYMONTHYEARINV',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.byMonth).toEqual(correctAppointment.events[0].repeating.byMonth);
    expect(json.events[0].repeating.bySetPos).toEqual(correctAppointment.events[0].repeating.bySetPos);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (yearly, 2. last workday, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2017-07-27T07:00:00.000Z'),
        'end': new Date('2017-07-27T17:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'YEARLY',
          'byDay': ['MO', 'TU', 'WE', 'TH', 'FR'],
          'byMonth': [7],
          'bySetPos': -2,
          'interval': 2,
          'count': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-27T07:00:00.000Z'),
      'end': new Date('2017-07-27T17:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'YEARLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'WORKINVYEAR',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.byMonth).toEqual(correctAppointment.events[0].repeating.byMonth);
    expect(json.events[0].repeating.bySetPos).toEqual(correctAppointment.events[0].repeating.bySetPos);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (yearly, 2. workday, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2017-07-04T07:00:00.000Z'),
        'end': new Date('2017-07-04T17:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'YEARLY',
          'byDay': ['MO', 'TU', 'WE', 'TH', 'FR'],
          'byMonth': [7],
          'bySetPos': 2,
          'interval': 2,
          'count': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-04T07:00:00.000Z'),
      'end': new Date('2017-07-04T17:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'YEARLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WEEKINV',
        'repByYearly': 'WORKYEAR',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.byMonth).toEqual(correctAppointment.events[0].repeating.byMonth);
    expect(json.events[0].repeating.bySetPos).toEqual(correctAppointment.events[0].repeating.bySetPos);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (monthly, 2. workday, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2017-07-04T07:00:00.000Z'),
        'end': new Date('2017-07-04T17:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'MONTHLY',
          'byDay': ['MO', 'TU', 'WE', 'TH', 'FR'],
          'bySetPos': 2,
          'interval': 2,
          'count': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-04T07:00:00.000Z'),
      'end': new Date('2017-07-04T17:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'MONTHLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WORK',
        'repByYearly': 'WORKYEAR',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.bySetPos).toEqual(correctAppointment.events[0].repeating.bySetPos);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));

  it('should add a recurring (monthly, 2. weekend day, interval 2, 2 events) event',
  inject([AppointmentsService], (service:   AppointmentsService) => {
    const calendar = ICalGenerator({
      domain: 'duely.tu-braunschweig.de',
      name: 'Duely',
      prodId: '//TU Braunschweig//Duely//EN',
      url: 'https://duely.tu-braunschweig.de',
      timezone: 'Europe/Berlin' // or what's configured in the settings
    });
    const correctAppointment = {
      'domain': 'duely.tu-braunschweig.de',
      'prodId': '//TU Braunschweig//Duely//EN',
      'name': 'Duely',
      'timezone': 'Europe/Berlin',
      'url': 'https://duely.tu-braunschweig.de',
      'events':
      [{
        'start': new Date('2017-07-02T07:00:00.000Z'),
        'end': new Date('2017-07-02T17:00:58.220Z'),
        'timezone': 'Europe/Berlin',
        'summary': 'SEP - TDSE',
        'location': 'TU Braunschweig',
        'repeating': {
          'freq': 'MONTHLY',
          'byDay': ['SA', 'SU'],
          'bySetPos': 2,
          'interval': 2,
          'count': 2,
        }
      }]
    };
    const toBeTestedAppointment: Appointment = {
      'summary': 'SEP - TDSE',
      'location': 'TU Braunschweig',
      'start': new Date('2017-07-02T07:00:00.000Z'),
      'end': new Date('2017-07-02T17:00:58.220Z'),
      'allDay': false,
      'recurringSettings': {
        'frequency': 'MONTHLY',
        'interval': 2,
        'ends': 'COUNT',
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': true,
        'friday': false,
        'saturday': false,
        'sunday': false,
        'repByMonthly': 'WORK',
        'repByYearly': 'WORKYEAR',
        'count': 2,
        'untilDate': new Date('2100-12-31'),
        'exclusions': []
      },
      'alarms': []
    };
    service.addEventToCalendar(calendar, toBeTestedAppointment);
    const json = calendar.toJSON();
    expect(json.domain).toEqual(correctAppointment.domain);
    expect(json.prodId).toEqual(correctAppointment.prodId);
    expect(json.name).toEqual(correctAppointment.name);
    expect(json.timezone).toEqual(correctAppointment.timezone);
    expect(json.url).toEqual(correctAppointment.url);
    expect(json.events[0].start).toEqual(correctAppointment.events[0].start);
    expect(json.events[0].end).toEqual(correctAppointment.events[0].end);
    expect(json.events[0].timezone).toEqual(correctAppointment.events[0].timezone);
    expect(json.events[0].summary).toEqual(correctAppointment.events[0].summary);
    expect(json.events[0].location).toEqual(correctAppointment.events[0].location);
    expect(json.events[0].repeating.freq).toEqual(correctAppointment.events[0].repeating.freq);
    expect(json.events[0].repeating.byDay).toEqual(correctAppointment.events[0].repeating.byDay);
    expect(json.events[0].repeating.bySetPos).toEqual(correctAppointment.events[0].repeating.bySetPos);
    expect(json.events[0].repeating.interval).toEqual(correctAppointment.events[0].repeating.interval);
    expect(json.events[0].repeating.count).toEqual(correctAppointment.events[0].repeating.count);
  }));
});
