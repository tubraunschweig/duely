/// <reference types="ical-generator" />
/**
 * imports the format of the Alarm of the Ical Generator
 */
import { AlarmData } from 'ical-generator';

export interface AlarmData extends AlarmData {
  triggerDelay: number;
  triggerUnit: 'MINUTES' | 'HOURS' | 'DAYS' | 'WEEKS';
}
