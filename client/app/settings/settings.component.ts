/**
 * This file defines the settings logic.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Component, OnInit } from '@angular/core';
import * as Holidays from 'date-holidays';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';
import { StorageService } from '../storage/storage.service';
import { TranslateService } from '@ngx-translate/core';

/**
 * Handles the loading and saving of the settings.
 * Additional it refreshes the selectboxes if needed.
 */
@Component({
  selector: 'rac-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  public settingsForm: FormGroup;
  // locations exclusions:
  public hd: any;
  public countries: any[];
  public states: any[];
  public regions: any[];
  public statesVisible: boolean;
  public regionsVisible: boolean;
  /** names of time zones */
  public timeZoneNames: string[];

  /** contructs the settings and sets defaults  */
  constructor(private fb: FormBuilder, private router: Router, private storage: StorageService,
              private translate: TranslateService) {
    this.hd = new Holidays();
    this.timeZoneNames = moment.tz.names();
  }

  /** creates fthe form */
  ngOnInit() {
    this.countries = this.getCountries();
    this.states = [];
    this.regions = [];
    this.statesVisible = false;
    this.regionsVisible = false;
    this.createForm();
    this.showStates();
    this.showRegions();
  }

  /**
   * This Method fills all fields in the settings form with standart values or loaded values.
   */
  createForm(): void {
      this.settingsForm = this.fb.group({
        location: this.fb.group({
          location_countries: this.storage.settings.country,
          location_states:  this.storage.settings.state,
          location_regions: this.storage.settings.region
        }),
        timezone: this.storage.settings.timeZone,
        language: this.storage.settings.language,
        color: this.storage.settings.color,
        debug: this.storage.settings.debug,
      });
  }

  /** gets the language stringe
    * @return gives out the language
    */
  private getFullLanguage(lang: string): string {
    if (lang === 'de') {
      return 'Deutsch';
    }
    return 'English';
  }


  /**
   * used to translate values of the holiday database to an array
   * @return translatet array
   */
  private objectToArray(obj: any): any[][] {
    const result = Object.keys(obj).map(function(e) {
      return [e, obj[e]];
    });
    return result;
  }

  /**
   * returns all countries of the holiday database as an array
   * @return all countries of the holiday database as an array
   */
  public getCountries(): any[] {
    return this.objectToArray(this.hd.getCountries());
  }

  /**
   * returns all states of the holiday database as an array
   * @return all states of the holiday database as an array
   */
  public getStates(country: string): any[] {
    const states = this.hd.getStates(country);
    if (states == null || states === undefined) {
      return undefined;
    }
    return this.objectToArray(states);
  }

  /**
   * returns all regions of the holiday database as an array
   * @return all regions of the holiday database as an array
   */
  public getRegions(country: string, state: string): any[] {
    const regions = this.hd.getRegions(country, state);
    if (regions == null || regions === undefined) {
      return undefined;
    }
    return this.objectToArray(regions);
  }

  /**
   * sets the value for a selectbox filled with all states and grants visibility
   * @param the position of the exclusionsform (see html)
   */
  public showStates(): void {
    const location = this.settingsForm.controls['location'] as FormGroup;
    const country = location.controls['location_countries'].value as string;
    if (country === undefined || country === '') {
      return;
    }
    this.states = this.getStates(country);
    if (this.states !== undefined) {
      this.statesVisible = true;
      this.regionsVisible = false;
    } else {
      this.statesVisible = false;
      this.regionsVisible = false;
      location.controls['location_states'].setValue('');
    }
  }

  /**
   * sets the value for a selectbox filled with all regions and grants visibility
   * @param the position of the exclusionsform (see html)
   */
  public showRegions(): void {
    const location = this.settingsForm.controls['location'] as FormGroup;
    const country = location.controls['location_countries'].value as string;
    const state = location.controls['location_states'].value as string;
    if (country === undefined || state === undefined
      || country === '' || state === '') {
      return;
    }
    this.regions = this.getRegions(country, state);
    if (this.regions !== undefined) {
      this.statesVisible = true;
      this.regionsVisible = true;
    } else {
      this.statesVisible = true;
      this.regionsVisible = false;
      location.controls['location_regions'].setValue('');
    }
  }

  /**
   * this method is used for saving and returning back to the basepage
   */
  public save(): void {
    const location = this.settingsForm.controls['location'] as FormGroup;
    const settings = {
      color: this.settingsForm.controls['color'].value as string,
      language: this.settingsForm.controls['language'].value as string,
      timeZone: this.settingsForm.controls['timezone'].value as string,
      country: location.controls['location_countries'].value as string,
      state: location.controls['location_states'].value as string,
      region: location.controls['location_regions'].value as string,
      debug: this.settingsForm.controls['debug'].value as string,
    };
    this.storage.saveSettings(settings);
    this.translate.use(settings.language);
    this.goHome();
  }

  /**
   * this method is used and returning back to the basepage without saving
   */
  public cancel(): void {
    if (this.storage.settings === null) {
      this.storage.saveSettings({});
    }
    this.goHome();
  }

  /**
   * this method sets the router-navigation to the basepage
   */
  public goHome(): void {
    this.router.navigate(['/']);
  }

}
