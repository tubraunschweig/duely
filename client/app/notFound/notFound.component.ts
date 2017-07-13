/**
 * This file contains the about page to show the information of
 * the developers and about duely
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Component used by Angular to find the corresponding HTML page
 * and to display the correct information
 */
@Component({
  selector: 'rac-not-found',
  templateUrl: './notFound.component.html',
  styleUrls: ['./notFound.component.scss']
})
export class NotFoundComponent {

  constructor(private translate: TranslateService) { }

}
