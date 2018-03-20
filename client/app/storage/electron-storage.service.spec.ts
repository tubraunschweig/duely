import { TestBed, inject } from '@angular/core/testing';

import { ElectronStorageService } from './electron-storage.service';
import * as FileSaver from 'file-saver';

describe('ElectronStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronStorageService]
    });
  });

  it('should ...', inject([ElectronStorageService], (service: ElectronStorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should save a file correctly', inject([ElectronStorageService], (service: ElectronStorageService) => {
    spyOn(FileSaver, 'saveAs');
    service.saveText('test', 'test.txt');
    expect(FileSaver.saveAs).toHaveBeenCalled();
  }));
});
