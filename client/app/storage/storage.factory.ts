/**
 * This file contains a factory function that handles the storage solution
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { environment } from '../../environments/environment';

import { StorageService } from './storage.service';
import { ElectronStorageService } from './electron-storage.service';
import { WebStorageService } from './web-storage.service';

/**
 * Selects the appropriate storage solution based on the environment
 * @since 0.4.0
 */
export function selectStorageService(): StorageService {
  if (environment.isElectron) {
    // use the file system to store data
    return new ElectronStorageService();
  } else {
    // download the files within browser
    return new WebStorageService();
  }
}
