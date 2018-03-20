import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../../../storage/storage.service';
import * as moment from 'moment-timezone';
import { AlarmData } from '../../alarmData';

import { AlarmSettingsComponent } from './alarm-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentsService } from '../../appointments.service';

describe('AlarmSettingsComponent', () => {
  let component: AlarmSettingsComponent;
  let fixture: ComponentFixture<AlarmSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmSettingsComponent ],
      imports: [ TranslateModule.forRoot(), ReactiveFormsModule ],
      providers: [ StorageService, AppointmentsService ]
    })
    .compileComponents();
  });

  beforeEach(inject([AppointmentsService], (service: AppointmentsService) => {
    fixture = TestBed.createComponent(AlarmSettingsComponent);
    component = fixture.componentInstance;
    component.appointment = service.defaultAppointment();
    component.alarms = [];
    fixture.detectChanges();
  }));

  it('should be created', inject([TranslateService],
      (translate: TranslateService) => {
    expect(component).toBeTruthy();
  }));

  it('should create a form', inject([TranslateService],
      (translate: TranslateService) => {
    component.createForm();
    expect(component.alarmsForm).toBeDefined();
  }));

  it('should send validator information to appointment', inject([TranslateService],
      (translate: TranslateService) => {
    component.endValidation(null);
    expect(component.appointment.valid[2]).toEqual(component.alarmsForm.valid);
  }));

  it('should add an alarm', inject([TranslateService],
      (translate: TranslateService) => {
    const numAlarms = component.alarms.length;
    const defaultAlarm = <AlarmData>{
      type: 'display',
      triggerDelay: 10,
      triggerUnit: 'MINUTES',
      repeat: 1,
      intervalMinutes: 5,
      trigger: (new moment(component.appointment.start)).subtract(10, 'MINUTES').toDate(),
      interval: 5 * 60
    };
    spyOn(component.alarms, 'push').and.callThrough();
    spyOn(component, 'setAlarms');
    component.addAlarm();
    expect(component.alarms.length).toEqual(numAlarms + 1);
    expect(component.alarms.push).toHaveBeenCalledWith(defaultAlarm);
    expect(component.setAlarms).toHaveBeenCalledWith(component.alarms);
  }));

  it('should remove an alarm', inject([TranslateService],
      (translate: TranslateService) => {
    const defaultAlarm = <AlarmData>{
      type: 'display',
      triggerDelay: 10,
      triggerUnit: 'MINUTES',
      repeat: 1,
      intervalMinutes: 5,
      trigger: (new moment(component.appointment.start)).subtract(10, 'MINUTES').toDate(),
      interval: 5 * 60
    };

    component.alarms.push(defaultAlarm);
    const numAlarms = component.alarms.length;
    component.removeAlarm(defaultAlarm);
    expect(component.alarms.length).toEqual(numAlarms - 1);

  }));

  it('should update the alarmforms', inject([TranslateService],
      (translate: TranslateService) => {
    const defaultAlarm = <AlarmData>{
      type: 'display',
      triggerDelay: 10,
      triggerUnit: 'MINUTES',
      repeat: 1,
      intervalMinutes: 5,
      trigger: (new moment(component.appointment.start)).subtract(10, 'MINUTES').toDate(),
      interval: 5 * 60
    };

    component.addAlarm();
    spyOn(component.alarmsForm, 'setControl');
    component.setAlarms(component.alarms);
    expect(component.alarmsForm.setControl).toHaveBeenCalled();

  }));

  it('should recalculate the trigger correctly', inject([TranslateService],
      (translate: TranslateService) => {
    const defaultAlarm = <AlarmData>{
      type: 'display',
      triggerDelay: 10,
      triggerUnit: 'MINUTES',
      repeat: 1,
      intervalMinutes: 5
    };
    const expectedTrigger = (new moment(component.appointment.start)).subtract(10, 'MINUTES').toDate();
    component.recalculateTrigger(defaultAlarm);
    expect(defaultAlarm.trigger).toEqual(expectedTrigger);

  }));

  it('should recalculate the interval correctly', inject([TranslateService],
      (translate: TranslateService) => {
    const defaultAlarm = <AlarmData>{
      type: 'display',
      triggerDelay: 10,
      triggerUnit: 'MINUTES',
      repeat: 1,
      intervalMinutes: 5
    };
    const expectedInterval = 5 * 60;
    component.recalculateInterval(defaultAlarm);
    expect(defaultAlarm.interval).toEqual(expectedInterval);

  }));

});
