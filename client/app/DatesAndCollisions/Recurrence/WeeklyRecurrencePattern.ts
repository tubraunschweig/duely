import * as ICalGenerator from 'ical-generator';
import * as Holidays from 'date-holidays';
import * as moment from 'moment';
import { RecurrencePattern } from './RecurrencePattern';


/**
 * The class WeeklyRecurrencePattern.
 */
export class WeeklyRecurrencePattern extends RecurrencePattern {

    public isMatch(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        const weekdays: string[] = eventData.repeating.byDay;

        if (this.isIn(eventData.repeating.byDay, date) === true) {
            const diff = this.weeksBetween(eventData.start, date);

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

        return {match: false, break: false};
    }

    private weeksBetween(start: Date, end: Date): number {
        const endMoment = moment(end);
        const startMoment = moment(start).startOf('week');

        return endMoment.diff(startMoment, 'weeks');
    }
}
