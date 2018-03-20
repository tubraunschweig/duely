/**
 * This file contains the storage solution for the web
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

import { StorageService } from './storage.service';

/**
 * Storage mechanism using the browser API
 * for web specific persistency tasks
 */
@Injectable()
export class WebStorageService extends StorageService {

  constructor() {
    super();
  }

/**
 * Download the file using the bowser's download dialogue
 * @param text The text data to be stored
 * @param filename The downloadable file's name. Defaults to duely.ics
 * @override
 */
  public saveText(text: string, filename?: string): void {
    filename = filename || 'duely.ics';
    const textFile = new File([text], filename, {type: 'text/calendar'});
    FileSaver.saveAs(textFile, undefined, true);
  }


}
