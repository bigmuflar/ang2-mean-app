/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MappingService } from './mapping.service';

describe('MappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MappingService]
    });
  });

  it('should ...', inject([MappingService], (service: MappingService) => {
    expect(service).toBeTruthy();
  }));
});
