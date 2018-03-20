import { TestBed, inject } from '@angular/core/testing';
import * as FileSaver from 'file-saver';

import { WebStorageService } from './web-storage.service';

describe('WebStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebStorageService]
    });
  });

  it('should download files', inject([WebStorageService], (service: WebStorageService) => {
    spyOn(FileSaver, 'saveAs');

    expect(() => service.saveText('Test')).not.toThrow();
    expect(() => service.saveText('Another test', 'myfile.txt')).not.toThrow();
    expect(FileSaver.saveAs).toHaveBeenCalledTimes(2);
  }));

  it('should save a file correctly', inject([WebStorageService], (service: WebStorageService) => {
    spyOn(FileSaver, 'saveAs');
    service.saveText('test', 'test.txt');
    expect(FileSaver.saveAs).toHaveBeenCalled();
  }));
});
