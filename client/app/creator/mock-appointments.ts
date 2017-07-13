import * as moment from 'moment-timezone';
import { Appointment } from './appointment';

export const APPOINTMENTS: Appointment[] = [
  {
    'summary': 'SEP - TDSE',
    'location': 'TU Braunschweig',
    'start': new Date('2017-07-13T06:00:00.000Z'),
    'end': new Date('2017-07-13T16:00:58.220Z'),
    'allDay': false,
    'valid': [false, true, true, true],
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
      'untilDate': moment(new Date()).format('YYYY-MM-DD'),
      'exclusions': [],
    }
  }
];
