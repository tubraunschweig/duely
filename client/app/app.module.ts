/**
 * This file loads the required components and services
 * as well as the Angular dependencies and environment configuration
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DatePickerModule } from 'ng2-datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { StorageService } from './storage/storage.service';
import { selectStorageService } from './storage/storage.factory';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { SettingsComponent } from './settings/settings.component';
import { CreatorComponent } from './creator/creator.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { AppointmentFormComponent } from './creator/appointment-form/appointment-form.component';
import { AdvancedSettingsComponent } from './creator/appointment-form/advanced-settings/advanced-settings.component';
import { RecurringSettingsComponent } from './creator/appointment-form/recurring-settings/recurring-settings.component';
import { AlarmSettingsComponent } from './creator/appointment-form/alarm-settings/alarm-settings.component';

import { AutoRedirectGuard } from './auto-redirect.guard';
import { AutoResizeDirective } from './auto-resize.directive';

/**
 * @version 0.4.0
 * @since 0.1.0
 * used to load components and bootstrap the application
 * generated and maintained using Angular CLI
 */

 // AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LegalComponent,
    SettingsComponent,
    CreatorComponent,
    AppointmentFormComponent,
    AdvancedSettingsComponent,
    RecurringSettingsComponent,
    AlarmSettingsComponent,
    NotFoundComponent,
    AutoResizeDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
       loader: {
         provide: TranslateLoader,
         useFactory: createTranslateLoader,
         deps: [Http]
       }
    }),
    DatePickerModule
  ],
  providers: [
    {
      provide: StorageService,
      useFactory: selectStorageService
    },
    {
      provide: LocationStrategy,
      useClass: environment.isElectron ? HashLocationStrategy : PathLocationStrategy
    },
    {
      provide: APP_BASE_HREF,
      useValue: environment.isElectron ? '' : '/'
    },
    AutoRedirectGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
