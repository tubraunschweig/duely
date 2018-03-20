import { Exclusion } from './exclusion';

type frequency = 'NEVER' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
type ends = 'NEVER' | 'COUNT' | 'UNTIL';
type repByMonthly = 'MONTH' | 'MONTHINV' | 'WEEK' | 'WEEKINV' | 'WORK' | 'WORKINV';
type repByYearly = 'DAYMONTHYEAR' | 'DAYMONTHYEARINV' | 'WEEKYEAR' | 'WEEKINVYEAR' | 'WORKINVYEAR' | 'WORKYEAR';

export interface RecurringSettings {
  frequency: frequency;
  interval: number;
  ends: ends;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  repByMonthly?: repByMonthly;
  repByYearly?: repByYearly;
  count?: number;
  untilDate?: Date;
  exclusions: Exclusion[];
}
