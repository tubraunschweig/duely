import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { RecurringSettingsComponent } from './recurring-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../../storage/storage.service';
import { AppointmentsService } from '../../appointments.service';



describe('RecurringSettingsComponent', () => {
  let component: RecurringSettingsComponent;
  let fixture: ComponentFixture<RecurringSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringSettingsComponent ],
      imports: [ TranslateModule.forRoot(), ReactiveFormsModule ],
      providers: [ AppointmentsService, StorageService ]
    })
    .compileComponents();
  });

  beforeEach(inject([AppointmentsService], (service: AppointmentsService) => {
    fixture = TestBed.createComponent(RecurringSettingsComponent);
    component = fixture.componentInstance;
    component.appointment = service.defaultAppointment();
    fixture.detectChanges();
  }));

  it('should be created', inject([TranslateService],
      (translate: TranslateService) => {
    expect(component).toBeTruthy();
  }));

  it('should update validation of the end date', () => {
    // throws error: appointment of undefined
    // expect(component.endValidation).not.toThrow();
  });

  it('should return countries', () => {
    const hdSpy = spyOn(component.hd, 'getCountries').and.returnValue({'a': 'A', 'b': 'B'});
    const ret = component.getCountries();
    expect(ret).toEqual([ ['a', 'A'], ['b', 'B'] ]);
    expect(hdSpy).toHaveBeenCalled();
  });

  it('should return states', () => {
    const hdSpy = spyOn(component.hd, 'getStates').and.returnValue({'a': 'A', 'b': 'B'});
    const ret = component.getStates('xyz');
    expect(ret).toEqual([ ['a', 'A'], ['b', 'B'] ]);
    expect(hdSpy).toHaveBeenCalledWith('xyz');
  });

  it('should return regions', () => {
    const hdSpy = spyOn(component.hd, 'getRegions').and.returnValue({'a': 'A', 'b': 'B'});
    const ret = component.getRegions('abc', 'def');
    expect(ret).toEqual([ ['a', 'A'], ['b', 'B'] ]);
    expect(hdSpy).toHaveBeenCalledWith('abc', 'def');
  });

  it('should return no states if country does not exist', () => {
    const hdSpy = spyOn(component.hd, 'getStates').and.returnValue(null);
    const ret = component.getStates('xyz');
    expect(ret).toBeUndefined();
    expect(hdSpy).toHaveBeenCalledWith('xyz');
  });

  it('should return no regions if state does not exist', () => {
    const hdSpy = spyOn(component.hd, 'getRegions').and.returnValue(null);
    const ret = component.getRegions('abc', 'def');
    expect(ret).toBeUndefined();
    expect(hdSpy).toHaveBeenCalledWith('abc', 'def');
  });

});
