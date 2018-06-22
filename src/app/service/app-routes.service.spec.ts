import { TestBed, inject } from '@angular/core/testing';

import { AppRoutesService } from './app-routes.service';

describe('AppRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppRoutesService]
    });
  });

  it('should be created', inject([AppRoutesService], (service: AppRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
