import * as ICalGenerator from 'ical-generator';
import * as Holidays from 'date-holidays';
import { CollisionDetector, Collision} from '../DatesAndCollisions/CollisionDetector';
import * as moment from 'moment';

describe('CollisionDetector', () => {
let cd: CollisionDetector;
let collisions: Collision[];
let eventData: ICalGenerator.EventData;

beforeEach(() => {
    eventData = {
        start: new Date('2017-01-01'),
        end: new Date('2017-01-01'),
        stamp: new Date(),
        summary: 'summary',
        location: 'location',
        allDay: false
    };

    let repeatingData: ICalGenerator.RepeatingData = {
        freq: 'DAILY',
        interval: 1,
        until: new Date('2017-12-31')
    };

    eventData.repeating = repeatingData;
});

    it('should return an empty array if no holidays or dates selected by the user are excluded', () => {
        cd = new CollisionDetector(undefined, undefined, 'de');
        collisions = cd.getCollisions(eventData);

        expect(collisions).toEqual([]);
    });

    it('should return all dates excluded by the user', () => {
        const userExcludedDates = new Array<Date>();
        const correctReturn = new Array<Collision>();

        let newDate: Date = new Date('2017-01-01');

        while (+newDate <= +(new Date('2017-01-02'))) {
            const col: Collision = {date: newDate, reason: 'excluded by user'};
            correctReturn.push(col);
            userExcludedDates.push(newDate);

            newDate = moment(newDate).add(1, 'days').toDate();
        }

        cd = new CollisionDetector(undefined, userExcludedDates, 'de');
        collisions = cd.getCollisions(eventData);

        for (let i = 0; i < correctReturn.length; i++) {
            expect(collisions[0].date).toEqual(correctReturn[0].date);
            expect(collisions[0].reason).toEqual(correctReturn[0].reason);
        }
    });

    it('should return all holidays of Lower Saxony and the city of Augsburg in Bavaria of the year 2017', () => {
        const correctReturn: Collision[] = [
            { date: new Date('2017-01-01T00:00:00+01:00'), reason: 'Neujahr' },
            { date: new Date('2017-01-06T00:00:00+01:00'), reason: 'Heilige Drei Könige' },
            { date: new Date('2017-04-14T00:00:00+01:00'), reason: 'Karfreitag' },
            { date: new Date('2017-04-17T00:00:00+01:00'), reason: 'Ostermontag' },
            { date: new Date('2017-05-01T00:00:00+01:00'), reason: 'Maifeiertag' },
            { date: new Date('2017-05-25T00:00:00+01:00'), reason: 'Christi Himmelfahrt' },
            { date: new Date('2017-06-05T00:00:00+01:00'), reason: 'Pfingstmontag' },
            { date: new Date('2017-06-15T00:00:00+01:00'), reason: 'Fronleichnam' },
            { date: new Date('2017-08-08T00:00:00+01:00'), reason: 'Augsburger Friedensfest' },
            { date: new Date('2017-08-15T00:00:00+01:00'), reason: 'Mariä Himmelfahrt' },
            { date: new Date('2017-10-03T00:00:00+01:00'), reason: 'Tag der Deutschen Einheit' },
            { date: new Date('2017-10-31T00:00:00+01:00'), reason: 'Reformationstag' },
            { date: new Date('2017-11-01T00:00:00+01:00'), reason: 'Allerheiligen' },
            { date: new Date('2017-12-25T00:00:00+01:00'), reason: '1. Weihnachtstag' },
            { date: new Date('2017-12-26T00:00:00+01:00'), reason: '2. Weihnachtstag' }
        ];

        const locations: Holidays.Country[] = [
            {country: 'de', state: 'ni', region: undefined},
            {country: 'de', state: 'by', region: 'a'}
        ];

        cd = new CollisionDetector(locations, undefined, 'de');
        collisions = cd.getCollisions(eventData);

        for (let i = 0; i < correctReturn.length; i++) {
            expect(collisions[0].date).toEqual(correctReturn[0].date);
            expect(collisions[0].reason).toEqual(correctReturn[0].reason);
        }
    });
});
