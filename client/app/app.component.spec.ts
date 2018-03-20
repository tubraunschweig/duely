/*
 * This file defines unit tests for the App Component.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { StorageService } from './storage/storage.service';
import { Router, RouterOutlet, ChildrenOutletContexts } from '@angular/router';

class MockRouter {
  navigateByUrl(url: string) { return url; }
  navigate(url: any) { return url; }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let settings: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        RouterOutlet,
        SettingsComponent
      ],
      providers: [
        StorageService,
        ChildrenOutletContexts,
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    settings = fixture.debugElement.componentInstance;
    component = TestBed.createComponent(AppComponent).debugElement.componentInstance;
  });

  it('should create the app', inject([TranslateService, Router],
      (translate: TranslateService, router: Router) => {
    expect(component).toBeTruthy();
  }));

  /* TODO: Test routes */
  it('should go home', inject([TranslateService, Router],
      (translate: TranslateService, router: Router) => {
    spyOn(router, 'navigate');
    settings.goHome();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));

});
