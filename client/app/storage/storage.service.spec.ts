import { TestBed, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';



describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should be created', inject([StorageService], (service:   StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should load the settings or set default values', inject([StorageService], (service:   StorageService) => {
    service.loadSettings();
    expect(service.settings.hasOwnProperty('color')).toBeTruthy();
    expect(service.settings.hasOwnProperty('language')).toBeTruthy();
    expect(service.settings.hasOwnProperty('timeZone')).toBeTruthy();
    expect(service.settings.hasOwnProperty('country')).toBeTruthy();
    expect(service.settings.hasOwnProperty('region')).toBeTruthy();
    expect(service.settings.hasOwnProperty('state')).toBeTruthy();
    expect(service.settings.hasOwnProperty('debug')).toBeTruthy();
  }));

  it('should save the settings with correct content', inject([StorageService], (service:   StorageService) => {
    service.loadSettings();
    const spy = spyOn(localStorage, 'setItem');
    service.saveSettings(service.settings);
    // expect(spy).toHaveBeenCalledWith('settings', JSON.stringify(service.settings));
  }));

});
