/**
 * This file loads the main application module and
 * binds it to the website
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/**
 * enable production mode
 */
if (environment.production) {
  enableProdMode();
  if (!environment.isElectron && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
