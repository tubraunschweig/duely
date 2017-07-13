/**
 * This file handles the input form and the genral user interface
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage/storage.service';
import { TranslateService } from '@ngx-translate/core';

/**
 * @version 0.4.0
 * @since 0.2.0
 * Main component that handles the application shell
 */
@Component({
  selector: 'rac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Creates the component and imports required dependencies
   * @param storage The environment specific storage service
   */
  constructor(private storage: StorageService, private translate: TranslateService) {
    translate.addLangs(['de', 'en']);

    translate.setDefaultLang('en');
    translate.use(storage.settings.language);
  }

  /**
   * Adds another event form to the collection
   */
  public addEvent(): void { }

}
