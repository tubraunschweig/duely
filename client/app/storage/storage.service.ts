/**
 * This file contains a mockup of the storage solutions
 * It will be replaced with the real service
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Injectable } from '@angular/core';

/**
 * This service offers methods to store data
 * @since 0.4.0
 */
@Injectable()
export abstract class StorageService {

  // actual settings:
  public settings = {
    color: 'red',
    country: '',
    state: '',
    region: '',
    timeZone: 'floating',
    language: 'en',
    debug: 'DEACTIVATED'
  };

  public settingsLoaded = false;

  constructor() {
    this.loadSettings();
  }
  /** gets color string from form
      @eturns color  */
  public getColor(): string {
    return this.settings.color;
  }

  /** @returns debug activated if activated */
  public getDebug(): boolean {
    return this.settings.debug === 'ACTIVATED';
  }

  /** loads the saved settings */
  public loadSettings(): void {
    // overwrite settings if can be found
    const settingsstr = localStorage.getItem('settings');
    if (settingsstr) {
      this.settingsLoaded = true;
      const settings = JSON.parse(settingsstr);
      if (settings.hasOwnProperty('color')) {
        this.settings.color = settings.color;
      }
      if (settings.hasOwnProperty('language')) {
        this.settings.language = settings.language;
      }
      if (settings.hasOwnProperty('timeZone')) {
        this.settings.timeZone = settings.timeZone;
      }
      if (settings.hasOwnProperty('country')) {
        this.settings.country = settings.country;
      }
      if (settings.hasOwnProperty('region')) {
        this.settings.region = settings.region;
      }
      if (settings.hasOwnProperty('state')) {
        this.settings.state = settings.state;
      }
      if (settings.hasOwnProperty('debug')) {
        this.settings.debug = settings.debug;
      }
    }
  }

  /** get settings and saved them in JSON */
  public saveSettings(settings: any): void {
    localStorage.setItem('settings', JSON.stringify(settings));
    this.loadSettings();
  }

  /**
   * Stores a piece of text either witin the file system
   * or by downloading it as a text file
   * @param text The file contents that are to be stored
   * @param filename The default file name of the stored file
   * @since 0.4.0
   */
  public abstract saveText(text: string, filename?: string): void;

}
