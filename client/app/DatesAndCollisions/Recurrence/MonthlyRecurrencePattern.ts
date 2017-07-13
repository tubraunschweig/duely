import * as ICalGenerator from 'ical-generator';
import * as Holidays from 'date-holidays';
import * as moment from 'moment';
import { RecurrencePattern } from './RecurrencePattern';



/**
 * The class MonthlyRecurrencePattern.
 */
export class MonthlyRecurrencePattern extends RecurrencePattern {

    /**
     * Check if a given date matches the recurrence pattern.
     *
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    public isMatch(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        if (eventData.repeating.byMonthDay !== undefined) {
            if (eventData.repeating.byMonthDay[0] === -1) {

                return this.lastDayOfMonth(eventData, date);
            }
        } else if (eventData.repeating.bySetPos !== undefined) {

            return this.bySetPos(eventData, date);
        } else if (eventData.repeating.byDay !== undefined) {

            return this.byDay(eventData, date);
        } else {

            return this.monthly(eventData, date);
        }
    }

   /** Check if a given last day of the Month is last days of the month
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    private lastDayOfMonth(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        if (+moment(date).endOf('month').toDate().setHours( 0, 0, 0, 0) === +moment(date).toDate().setHours( 0, 0, 0, 0)) {
            return this.isMatchOfInterval(eventData, date);
        }

        return {match: false, break: false};
    }

  /** Check which number the a given day has in a week  
    * @return true, true if the intervall is right
    */
    private byDay(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        const byDayString: string = eventData.repeating.byDay[0].toString();
        const dayPart: string = byDayString.slice(-2);
        const index: number = byDayString.length - 2;
        const factorPart: string = byDayString.slice(0, index);
        const factor: number = Number(factorPart) === 0 ?  1 : Number(factorPart);

        if (moment(date).isoWeekday() === this.getIsoWeekday(dayPart)) {
            const month: number = moment(date).get('month');

            let counter = 0;
            let d = date;
            if (factor >= 0) {
                while (moment(d).get('month') === month) {
                    d = moment(d).subtract(1, 'week').toDate();
                    counter++;
                }
            } else {
                while (moment(d).get('month') === month) {
                    d = moment(d).add(1, 'week').toDate();
                    counter--;
                }
            }

            if (counter === factor) {
                return this.isMatchOfInterval(eventData, date);
            }
        }

        return {match: false, break: false};
    }

/** Check  a given last day of the Month of it number from the last day on
    * @return true, true if the intervall is right
    */
    private bySetPos(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {

        if (this.isIn(eventData.repeating.byDay, date) === true) {
            let counter = 0;

            if (eventData.repeating.bySetPos >= 0) {
                const month: number = moment(date).get('month');

                let d = date;
                while (moment(d).get('month') === month) {
                    if (this.isIn(eventData.repeating.byDay, d) === true) {

                        counter++;
                    }
                    d = moment(d).subtract(1, 'day').toDate();
                }
            } else {
               const month: number = moment(date).get('month');

                let d = date;
                while (moment(d).get('month') === month) {
                    if (this.isIn(eventData.repeating.byDay, d) === true) {
                        counter--;
                    }
                    d = moment(d).add(1, 'day').toDate();
                }
            }

            if (counter === eventData.repeating.bySetPos) {
                return this.isMatchOfInterval(eventData, date);
            }
        }

        return {match: false, break: false};
    }

  /** Check if a given date intervall is the event date intervall
    * @return true, true if the intervall is right
    */
    private monthly(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        if (moment(date).date() === moment(eventData.start).date()) {

            return this.isMatchOfInterval(eventData, date);
        }

        return {match: false, break: false};
    }

  /** Check if a given Intervall is identical
    * @return true, true if the intervall is right
    * @return true, false 
    * @return false, false
    * @return false , true
    */
    private isMatchOfInterval(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        const diff = this.monthsBetween(eventData.start, date);

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

  /** Is given start and end date
    * @return moment of start, and the month
    */
    private monthsBetween(start: Date, end: Date): number {
        const endMoment = moment(end);
        const startMoment = moment(start).startOf('month');

        return endMoment.diff(startMoment, 'months');
    }
}
