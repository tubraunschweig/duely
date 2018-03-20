/**
 * This file contains the legal notice page required
 * to show the hoster of the page and other legal information
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { StorageService } from '../storage/storage.service';

/**
 * Component used by Angular to find the corresponding HTML page
 * and to display the correct information
 */
@Component({
  selector: 'rac-impress',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {


  public content = `<h1>Legal notice</h1>
    This is the default legal notice message.
    To add your own, please edit the 'content' variable in static/main.bundle.js!`;

  constructor(private http: Http) { }

  ngOnInit() {


  }

}
