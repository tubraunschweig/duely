/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CreatorComponent } from './creator/creator.component';
import { LegalComponent } from './legal/legal.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './notFound/notFound.component';

import { AutoRedirectGuard } from './auto-redirect.guard';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'legal',
    component: LegalComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: CreatorComponent,
    canActivate: [ AutoRedirectGuard ],
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

/**
 * @version 0.0.1
 * Routing module delegates url changes to modules
 * Assigned routes will be forwarded to main module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
