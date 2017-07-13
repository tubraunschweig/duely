import { DailyRecurrencePattern } from './Recurrence/DailyRecurrencePattern';
import { WeeklyRecurrencePattern } from './Recurrence/WeeklyRecurrencePattern';
import { MonthlyRecurrencePattern } from './Recurrence/MonthlyRecurrencePattern';
import { YearlyRecurrencePattern } from './Recurrence/YearlyRecurrencePattern';
import * as ICalGenerator from 'ical-generator';
import * as Holidays from 'date-holidays';

/**
 * The type Collision.
 */
export interface Collision {
    /** The date of a collision. */
    date: Date;
    /** The reason of a collision. */
    reason: string;
}

/**
 * The class CollisionDetector.
 */
export class CollisionDetector {
    /** The locations to be considered when checking for collisions with public holidays.  */
    private locations: Holidays.Country[];
    /** The dates that are excluded by the user. */
    private userExclusions: Date[];
    /** The language. */
    private language: string;

    /**
     * Constructor of class CollisionDetector
     * @param locations         The locations to be considered when checking for collisions with public holidays.
     * @param userExclusions    The dates that are excluded by the user.
     */
    constructor(locations: Holidays.Country[], userExclusions: Date[], language: string) {
        this.locations = locations;
        this.userExclusions = userExclusions;
        this.language = language;
    }

    /**
     * Get the collisions with a given event.
     * @param eventData     The data of an iCal event.
     * @return              The collisions.
     */
    public getCollisions(eventData: ICalGenerator.EventData): Collision[] {
        let collisions: Collision[];

        if (eventData.repeating !== undefined) {
          switch (eventData.repeating.freq) {
              case 'DAILY': {
                  const drp = new DailyRecurrencePattern(this.locations, this.userExclusions, this.language);
                  collisions = drp.getCollisions(eventData);
                  break;
              }
              case 'WEEKLY': {
                  const wrp = new WeeklyRecurrencePattern(this.locations, this.userExclusions, this.language);
                  collisions = wrp.getCollisions(eventData);
                  break;
              }
              case 'MONTHLY': {
                  const mrp = new MonthlyRecurrencePattern(this.locations, this.userExclusions, this.language);
                  collisions = mrp.getCollisions(eventData);
                  break;
              }
              case 'YEARLY': {
                  const yrp = new YearlyRecurrencePattern(this.locations, this.userExclusions, this.language);
                  collisions = yrp.getCollisions(eventData);
                  break;
              }
          }
        }

        return collisions;
    }
}
