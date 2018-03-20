import {ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../../../storage/storage.service';
import { AppointmentsService } from '../../appointments.service';
import { AdvancedSettingsComponent } from './advanced-settings.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AdvancedSettingsComponent', () => {
  let component: AdvancedSettingsComponent;
  let fixture: ComponentFixture<AdvancedSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSettingsComponent ],
      imports: [ TranslateModule.forRoot(), ReactiveFormsModule ],
      providers: [ StorageService, AppointmentsService ]
    })
    .compileComponents();
  });

  beforeEach(inject([AppointmentsService], (service: AppointmentsService) => {
    fixture = TestBed.createComponent(AdvancedSettingsComponent);
    component = fixture.componentInstance;
    component.appointment = service.defaultAppointment();
    fixture.detectChanges();
  }));

  it('should be created', inject([TranslateService],
      (translate: TranslateService) => {
    expect(component).toBeTruthy();
  }));

  it('should set the validation correctly', inject([TranslateService],
      (translate: TranslateService) => {
    component.endValidation(null);
    expect(component.appointment.valid[3]).toEqual(component.advancedForm.valid);
  }));

  it('should update the appointment', inject([TranslateService],
      (translate: TranslateService) => {
    component.updateAppointment();
    expect(component.appointment.status).toEqual(component.status);
    expect(component.appointment.floating).toEqual(component.timezone === 'floating');
    expect(component.appointment.timezone).toEqual(component.timezone === 'floating' ? undefined : component.timezone);

  }));

  it('should be created', inject([TranslateService],
      (translate: TranslateService) => {
    expect(component).toBeTruthy();
  }));

  /* TODO: test createForm / ngOnOnit & ngOnChanges */
});
