import * as ICalGenerator from 'ical-generator';
import * as Holidays from 'date-holidays';
import * as moment from 'moment';
import { RecurrencePattern } from './RecurrencePattern';



/**
 * The class YearlyRecurrencePattern.
 */
export class YearlyRecurrencePattern extends RecurrencePattern {

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

            return this.yearly(eventData, date);
        }
    }

   /** Check if a given last day of the Year is last days of the year
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    private lastDayOfMonth(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        if (+moment(date).endOf('month').toDate().setHours( 0, 0, 0, 0) === +moment(date).toDate().setHours( 0, 0, 0, 0)) {
            return this.isMatchOfInterval(eventData, date);
        }

        return {match: false, break: false};
    }

   /** Check if a day is certain day of the year
     * @param eventData     The data of the event.
     * @param date          The date to check.
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

   /** Check if a day has certain postion in the year
     * @param eventData     The data of the event.
     * @param date          The date to check.
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

   /** Check if the intervall is the calculated yearly
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    private yearly(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        if (moment(date).date() === moment(eventData.start).date()) {

            return this.isMatchOfInterval(eventData, date);
        }

        return {match: false, break: false};
    }

   /** Check if the intervall is the calculated intervall
     * @param eventData     The data of the event.
     * @param date          The date to check.
     */
    private isMatchOfInterval(eventData: ICalGenerator.EventData, date: Date): {match: boolean, break: boolean} {
        const diff = this.yearsBetween(eventData.start, date);

        if (moment(eventData.start).get('month') === moment(date).get('month')) {
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
        } else {
            return {match: false, break: false};
        }
    }

   /** Count the years between the start and end date
     * @param start: Date     start date
     * @param end: Date        end date.
     * @return 
     */
    private yearsBetween(start: Date, end: Date): number {
        const endMoment = moment(end);
        const startMoment = moment(start).startOf('year');

        return endMoment.diff(startMoment, 'year');
    }
}
