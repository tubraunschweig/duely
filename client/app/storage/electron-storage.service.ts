/**
 * This file contains the storage solution for Electron
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

import { StorageService } from './storage.service';

/**
 * Storage mechanism using the filesystem
 * for Electron specific persistency tasks
 */
@Injectable()
export class ElectronStorageService extends StorageService {

  constructor() {
    super();
  }

/**
 * Download the file using the Node.js file system API
 * @param text The text data to be stored
 * @param filename The default file name
 * @override
 */
  public saveText(text: string, filename?: string): void {
     // remote.dialog.showSaveDialog({});
     filename = filename || 'duely.ics';
     const textFile = new File([text], filename, {type: 'text/calendar'});
     FileSaver.saveAs(textFile, undefined, true);
  }

}
