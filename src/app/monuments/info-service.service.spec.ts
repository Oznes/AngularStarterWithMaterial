import { TestBed, inject } from '@angular/core/testing';

import { InfoServiceService } from './info-service.service';

describe('InfoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoServiceService]
    });
  });

  it('should be created', inject([InfoServiceService], (service: InfoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
