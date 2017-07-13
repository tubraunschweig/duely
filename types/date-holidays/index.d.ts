/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

declare module 'date-holidays' {
  function DateHolidays():void;
  function DateHolidays(country: string|DateHolidays.Country, state: string, region: string, opts?: DateHolidays.Options): void;
  function DateHolidays(country: DateHolidays.Country|string, opts?: DateHolidays.Options):void;
  
  namespace DateHolidays {
    type Types = 'public' | 'bank' | 'school' | 'optional' | 'observance';

    interface Country {
      country: string;
      state: string;
      region: string;
    }

    interface Options {
      languages: string[];
      timezone: string;
      types: Types[];
    }

    interface Holiday {
      date: string;
      start: Date;
      end: Date;
      name: string;
      type: Types;
    }

    class Holidays {
      constructor();
      constructor(country: string, state: string, region: string, opts?: Options);
      constructor(country: Country|string, opts?: Options);
      init(country: string, state: string, region: string, opts?: Options): boolean|void;
      setHoliday(rule: string, opts: string|Options): boolean;
      getHolidays(year: string|Date, language?: string): Holiday[];
      isHoliday(date: Date): Holiday|boolean;
      moveToTimezone(date: Date, timezone?: string): Date;
      query(country: string, state?: string): any;
      getCountries(lang?: string): any;
      getStates(country: string): any;
      getRegions(country: string, state: string): any;
      getTimezones(): string[];
      setTimezone(timezone: string): void;
      getLanguages(): string[];
      setLanguages(language: string): string[]|boolean;
      getDayOff(): string;
    }
  }
  export = DateHolidays;
}
