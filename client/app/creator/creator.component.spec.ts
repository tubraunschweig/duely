import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import * as fs from 'fs';
import { CreatorComponent } from './creator.component';
import { StorageService } from '../storage/storage.service';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { RecurringSettingsComponent } from './appointment-form/recurring-settings/recurring-settings.component';
import { AlarmSettingsComponent } from './appointment-form/alarm-settings/alarm-settings.component';
import { AdvancedSettingsComponent } from './appointment-form/advanced-settings/advanced-settings.component';
import { ReactiveFormsModule } from '@angular/forms';



describe('CreatorComponent', () => {
  let component: CreatorComponent;
  let fixture: ComponentFixture<CreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorComponent, AppointmentFormComponent, RecurringSettingsComponent,
        AlarmSettingsComponent, AdvancedSettingsComponent ],
      imports: [ TranslateModule.forRoot(), ReactiveFormsModule],
      providers: [ AppointmentsService, StorageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([AppointmentsService, StorageService, TranslateService],
      (service: AppointmentsService, storage: StorageService, translate: TranslateService) => {
    expect(component).toBeTruthy();
  }));

  it('should start with 1 appointment', inject([AppointmentsService, StorageService, TranslateService],
      (service: AppointmentsService, storage: StorageService, translate: TranslateService) => {
    component.getAppointments().then(() => {
      expect(component.appointments).not.toBeUndefined();
      expect(component.appointments.length).toEqual(1);
    });
  }));

  it('should call saveText and getICalString if input is valid', inject([AppointmentsService, StorageService, TranslateService],
      (service: AppointmentsService, storage: StorageService, translate: TranslateService) => {
    const filename = 'duely.ics';
    component.getAppointments().then(() => { // adds an appointment
      expect(component.appointments).not.toBeNull();
      expect(component.appointments.length).toEqual(1);
      component.appointments[0].summary = 'test'; // now it's a valid input
      spyOn(storage, 'saveText');
      spyOn(service, 'getICalString');
      component.generateAndSaveICAL();
      expect(storage.saveText).toHaveBeenCalled();
      expect(service.getICalString).toHaveBeenCalled();
    });
  }));


  it('shouldn\'t call saveText and getICalString if input is invalid', inject([AppointmentsService, StorageService, TranslateService],
      (service: AppointmentsService, storage: StorageService, translate: TranslateService) => {
    const filename = 'duely.ics';
    component.getAppointments().then(() => { // adds an appointment
        expect(component.appointments).not.toBeNull();
        expect(component.appointments.length).toEqual(1);
        component.appointments[0].summary = ''; // now it's an invalid input
        spyOn(storage, 'saveText');
        spyOn(service, 'getICalString');
        component.generateAndSaveICAL();
        expect(storage.saveText).not.toHaveBeenCalled();
        expect(service.getICalString).not.toHaveBeenCalled();
      });
  }));
});
