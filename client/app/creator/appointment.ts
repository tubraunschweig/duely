/**
 * sets the types for the form
 */

import { Moment } from 'moment-timezone';

import { RecurringSettings } from './recurring-settings';
import { AlarmData } from './alarmData';

export interface Appointment {
  start: Date;
  summary: string;
  id?: string;
  uid?: string;
  end?: Date;
  stamp?: Date;
  description?: string;
  location?: string;
  url?: string;
  sequence?: number;
  allDay?: boolean;
  floating?: boolean;
  htmlDescription?: string;
  alarms?: AlarmData[];
  status?: string;
  timezone?: string;
  recurringSettings?: RecurringSettings;
  valid?: boolean[];
}
