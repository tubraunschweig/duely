import { browser, element, by, Key, promise } from 'protractor';
import * as fs from 'fs';
import * as path from 'path';

import { WebPage } from './app.po';

describe('Duely', () => {
  const page: WebPage = new WebPage();
  const downloadFile = path.join(__dirname, '../dist/downloads/duely.ics');

  page.navigateTo('/');
  browser.executeScript('window.localStorage.clear()');

  beforeEach(() => {
    page.navigateTo('/');
  });

  /**
   * tests whether the user is redirected to the settings
   * if no settings data is present
   * Implements T600
   */
  it('should redirect to the settings page', () => {
    expect(page.getComponentTag()).toEqual('rac-settings');
  });

  /**
   * tests whether the user stays on the home page
   * if settings data could be retrieved
   */
  it('should stay on the creator when settings are set', () => {
    browser.executeScript('localStorage.setItem("settings", "{}")');
    page.navigateTo('/').then(() => {
      expect(page.getComponentTag()).toEqual('rac-creator');
    });
  });

  /**
   * tests whether a file is being downloaded
   * Implements T1200
   */
  it('should generate a file', () => {
    const formSelector = 'rac-appointment-form:first-of-type ';

    const summary = element(by.css(formSelector + 'input[ng-reflect-name="summary"]'));
    summary.sendKeys('Termin #1');

    const download = element(by.css('button.btn-success'));
    download.click();

    browser.wait(() => {
      return fs.existsSync(downloadFile);
    }, 500000).then((fileFound: boolean) => {
      expect(fileFound).toBeTruthy();
      if (fileFound) {
        fs.unlinkSync(downloadFile);
      }
    });
  });

  /**
   * tests whether the end date is corrected when start date is later
   * Implements T100
   */
  /*it('should change the end date when start is after end', () => {
    const formSelector = 'rac-appointment-form:first-of-type ';
    const startSelector = formSelector + 'div[ng-reflect-name="start"] ';
    const endSelector = formSelector + 'div[ng-reflect-name="end"] ';

    const dateString = browser.executeScript(() => {
      return new Date(2098, 11, 31).toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    });

    const startDate = element(by.css(startSelector + 'input[ng-reflect-name="date"]'));
    const endDate = element(by.css(endSelector + 'input[ng-reflect-name="date"]'));

    startDate.click();
    startDate.sendKeys(dateString);
    expect(endDate.getAttribute('value')).toEqual('2098-12-31');
  });*/

  /**
   * tests whether non existing pages redirect to 404 page
   */
  it('should redirect to error page if url is not found', () => {
    page.navigateTo('/xyz');
    expect(page.getComponentTag()).toEqual('rac-not-found');
  });

  /**
   * tests whether the time inputs are removed when
   * all day option is active.
   * Implements test case T300 and T301
   */
  it('should hide time inputs (only) when all-day is selected', () => {
    const formSelector = 'rac-appointment-form:first-of-type ';
    const startSelector = formSelector + 'div[ng-reflect-name="start"] ';
    const endSelector = formSelector + 'div[ng-reflect-name="end"] ';

    const startTime = element(by.css(startSelector + 'input[ng-reflect-name="time"]'));
    const endTime = element(by.css(endSelector + 'input[ng-reflect-name="time"]'));

    // should exist when all day is unchecked
    expect(startTime.isPresent()).toBeTruthy();
    expect(endTime.isPresent()).toBeTruthy();

    const allDay = element(by.css(formSelector + 'input[ng-reflect-name="allDay"]'));
    allDay.click().then(() => {
      // should have been removed when all day was checked
      expect(startTime.isPresent()).not.toBeTruthy();
      expect(endTime.isPresent()).not.toBeTruthy();

      allDay.click().then(() => {
        // should be visible again after unchecking all-day option
        expect(startTime.isPresent()).toBeTruthy();
        expect(endTime.isPresent()).toBeTruthy();
      });
    });
  });

  /**
   * tests whether alarms can be added to an appointment
   * and can be removed again
   * Implements T400 and T401
   */
  it('should add an alarm when pressing the button', () => {
    const alarmSelector = 'rac-alarm-settings:first-of-type ';
    const firstAlarmSelector = alarmSelector + 'div[ng-reflect-name="alarms"] > div';
    const addButton = element(by.css(alarmSelector + 'button[data-identifier="add-alarm-button"]'));
    const alarmDiv = element(by.css(firstAlarmSelector));
    const removeButton = element(by.css(firstAlarmSelector + ' button[data-identifier="remove-alarm-button"]'));

    // no alarms should be present by default
    expect(alarmDiv.isPresent()).not.toBeTruthy();

    addButton.click().then(() => {
      // clicking the button should add an alarm
      expect(alarmDiv.isPresent()).toBeTruthy();

      removeButton.click().then(() => {
        // alarm should be removed again
        expect(alarmDiv.isPresent()).not.toBeTruthy();
      });
    });
  });

  /**
   * tests whether the user is redirected to the settings
   * Implements T1400
   */
  it('should redirect to settings when pressing the button', () => {
    const buttonSelector = 'nav a[href="/settings"]';
    const button = element(by.css(buttonSelector));
    expect(button.isPresent).toBeTruthy();
    button.click().then(() => {
      expect(page.getComponentTag()).toEqual('rac-settings');
    });
  });

  /**
   * tests whether recurrence settings are able to expand
   */
  it('should expand the recurrence settings when clicking the caret', () => {
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]')).isPresent()).not.toBeTruthy();
    const recurrence = element(by.css('rac-recurring-settings:first-of-type button[data-identifier="expand-recurring"]'));
    expect(recurrence.isPresent).toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]')).isPresent()).toBeTruthy();
    });
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]'))
      .isPresent()).not.toBeTruthy();
    });
  });

  /**
   * tests whether recurrence settings are able to expand
   */
  it('should display the different form for recurrence setting daily', () => {
    const recurrence = element(by.css('rac-recurring-settings:first-of-type button[data-identifier="expand-recurring"]'));
    expect(recurrence.isPresent).toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]')).isPresent()).toBeTruthy();
    });
    // DAILY
    element(by.cssContainingText('option', 'Daily')).click();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-weekly"]')).isPresent()).not.toBeTruthy();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-monthly"]')).isPresent()).not.toBeTruthy();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-yearly"]')).isPresent()).not.toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]'))
      .isPresent()).not.toBeTruthy();
    });
  });

  /**
   * tests whether recurrence settings are able to expand
   */
  it('should display the different form for recurrence setting weekly', () => {
    const recurrence = element(by.css('rac-recurring-settings:first-of-type button[data-identifier="expand-recurring"]'));
    expect(recurrence.isPresent).toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]')).isPresent()).toBeTruthy();
    });
    // WEEKLY
    element(by.cssContainingText('option', 'Weekly')).click();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-weekly"]')).isPresent()).toBeTruthy();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-monthly"]')).isPresent()).not.toBeTruthy();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-yearly"]')).isPresent()).not.toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]'))
      .isPresent()).not.toBeTruthy();
    });
  });

  /**
   * tests whether recurrence settings are able to expand
   */
  it('should display the different form for recurrence setting Monthly', () => {
    const recurrence = element(by.css('rac-recurring-settings:first-of-type button[data-identifier="expand-recurring"]'));
    expect(recurrence.isPresent).toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]')).isPresent()).toBeTruthy();
    });
    // Monthly
    element(by.cssContainingText('option', 'Monthly')).click();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-weekly"]')).isPresent()).not.toBeTruthy();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-monthly"]')).isPresent()).toBeTruthy();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-yearly"]')).isPresent()).not.toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]'))
      .isPresent()).not.toBeTruthy();
    });
  });

  /**
   * tests whether recurrence settings are able to expand
   */
  it('should display the different form for recurrence setting yearly', () => {
    const recurrence = element(by.css('rac-recurring-settings:first-of-type button[data-identifier="expand-recurring"]'));
    expect(recurrence.isPresent).toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]')).isPresent()).toBeTruthy();
    });
    // Yearly
    element(by.cssContainingText('option', 'Yearly')).click();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-weekly"]')).isPresent()).not.toBeTruthy();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-monthly"]')).isPresent()).not.toBeTruthy();
    expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-yearly"]')).isPresent()).toBeTruthy();
    recurrence.click().then(() => {
      expect(element(by.css('rac-recurring-settings:first-of-type div[data-identifier="recurring-settings"]'))
      .isPresent()).not.toBeTruthy();
    });
  });

  /**
   * tests whether recurrence settings are able to expand
   * Implements T700
   */
  it('should hide all setting when clicking the right caret', () => {
    const caret = element(by.css('button[data-identifier="hide-full-appointment-form"]:first-of-type'));
    const appointmentForm = element(by.css('rac-appointment-form:first-of-type'));
    expect(appointmentForm.isPresent()).toBeTruthy();
    caret.click().then(() => {
      expect(appointmentForm.isPresent()).not.toBeTruthy();
    });
    caret.click().then(() => {
      expect(appointmentForm.isPresent()).toBeTruthy();
    });
  });

  /**
   * tests whether recurrence settings are able to expand
   * Implements T1000, T1100
   */
  it('should add Exclusions', () => {
    const recurrence = element(by.css('rac-recurring-settings:first-of-type button[data-identifier="expand-recurring"]'));
    const recurringSettings = 'rac-recurring-settings:first-of-type';
    const button = 'button[data-identifier="add-exclusion-button"]:first-of-type';
    const addButton = element(by.css( recurringSettings + ' ' + button));
    const removeButton = element(by.css( recurringSettings + ' button[data-identifier="remove-exclusion-button"'));
    const holidays = element(by.css(recurringSettings + ' ' + 'div[data-identifier="holiday-settings"]:first-of-type'));
    const countries = element(by.css(recurringSettings + ' ' + 'select[data-identifier="countries"]:first-of-type'));
    const states = element(by.css(recurringSettings + ' ' + 'select[data-identifier="states"]:first-of-type'));
    const regions = element(by.css(recurringSettings + ' ' + 'select[data-identifier="regions"]:first-of-type'));
    recurrence.click();
    element(by.cssContainingText('option', 'Yearly')).click();
    expect(holidays.isPresent()).not.toBeTruthy();
    expect(countries.isPresent()).not.toBeTruthy();
    expect(states.isPresent()).not.toBeTruthy();
    expect(regions.isPresent()).not.toBeTruthy();
    addButton.click().then(() => {
      expect(holidays.isPresent()).toBeTruthy();
      expect(countries.isPresent()).toBeTruthy();
      expect(states.isPresent()).not.toBeTruthy();
      expect(regions.isPresent()).not.toBeTruthy();
    });
    element(by.cssContainingText('option', 'United States of America')).click().then(() => {
      expect(holidays.isPresent()).toBeTruthy();
      expect(countries.isPresent()).toBeTruthy();
      expect(states.isPresent()).toBeTruthy();
      expect(regions.isPresent()).not.toBeTruthy();
    });
    element(by.cssContainingText('option', 'California')).click().then(() => {
      expect(holidays.isPresent()).toBeTruthy();
      expect(countries.isPresent()).toBeTruthy();
      expect(states.isPresent()).toBeTruthy();
      expect(regions.isPresent()).toBeTruthy();
    });
    removeButton.click().then(() => {
      expect(holidays.isPresent()).not.toBeTruthy();
      expect(countries.isPresent()).not.toBeTruthy();
      expect(states.isPresent()).not.toBeTruthy();
      expect(regions.isPresent()).not.toBeTruthy();
    });
  });

  /**
   * tests whether new events can be created and removed
   * from the calendar
   * Implements T800
   */
  it('should add and remove appointments', () => {
    const addButton = element(by.id('add-appointment-btn'));
    const appForm = element.all(by.tagName('rac-appointment-form'));
    const appointmentSelector = 'rac-creator ul > li:nth-child(2) ';
    const removeButton = element(by.css(appointmentSelector + 'button[data-identifier="remove-appointment-btn"]'));

    // only one appointment should exist
    expect(appForm.count()).toEqual(1);
    expect(removeButton.isPresent()).not.toBeTruthy();

    addButton.click().then(() => {
      // appointment should have been added
      expect(appForm.count()).toEqual(2);
      expect(removeButton.isPresent()).toBeTruthy();

      removeButton.click().then(() => {
        // appointment should have been removed
        expect(appForm.count()).toEqual(1);
        expect(removeButton.isPresent()).not.toBeTruthy();
      });
    });

  });

  /**
   * tests whether the selected settings are applied to the page
   * Implements T1500, T1600, T1700, T2100
   * Be careful as this test changes the language of the page
   */
  /*it('should accept changed settings', () => {
    page.navigateTo('/settings');
    const tz = 'select[ng-reflect-name="timezone"]';
    const lang = 'select[ng-reflect-name="language"]';
    const color = 'select[ng-reflect-name="color"]';
    const debug = 'select[ng-reflect-name="debug"]';

    const saveButton = element(by.css('button[type="submit"]'));

    // default values are still set
    expect(element(by.css(tz + ' option:checked')).getAttribute('value')).toEqual('floating');
    expect(element(by.css(lang + ' option:checked')).getAttribute('value')).toEqual('en');
    expect(element(by.css(color + ' option:checked')).getAttribute('value')).toEqual('red');
    expect(element(by.css(debug + ' option:checked')).getAttribute('value')).toEqual('DEACTIVATED');

    Promise.all<void>([
      element(by.css(tz + ' option[value="Europe/Berlin"]')).click(),
      element(by.css(lang + ' option[value="de"]')).click(),
      element(by.css(color + ' option[value="blue"]')).click(),
      element(by.css(debug + ' option[value="ACTIVATED"]')).click()
    ]).then(() => {
      saveButton.click().then(() => {
        browser.waitForAngular().then(() => {
          expect(page.getComponentTag()).toEqual('rac-creator');
          // TODO: test recurrence defaults
          expect(element(by.tagName('h2')).getText()).toContain('Termin');
          expect(element(by.tagName('nav')).getCssValue('background-color')).toEqual('rgba(0, 128, 180, 1)');
          expect(element(by.tagName('pre')).isPresent()).toBeTruthy();
        });
      });
    });
  });*/

});
