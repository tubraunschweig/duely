import * as ICalGenerator from 'ical-generator';
import * as Holidays from 'date-holidays';
import * as moment from 'moment';
import { RecurrencePattern } from './RecurrencePattern';

/**
 * The class DailyRecurrencePattern.
 */
export class DailyRecurrencePattern extends RecurrencePattern {

    /**
     * Check if a given date matches the recurrence pattern.
     *
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    public isMatch(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        if (moment(date).isSame(eventData.start, 'days') === true) {
            return {match: true, break: false};
        } else {
            const diff = this.daysBetween(eventData.start, date);

            if (diff % eventData.repeating.interval === 0) {
                if (eventData.repeating.count !== undefined) {
                    if (diff / eventData.repeating.interval > eventData.repeating.count) {
                        return {match: false, break: true};
                    } else {
                        return {match: true, break: false};
                    }
                } else {
                    return {match: true, break: false};
                }
            } else {
                return {match: false, break: false};
            }
        }
    }
}
