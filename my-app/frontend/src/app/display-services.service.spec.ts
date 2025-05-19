import { TestBed } from '@angular/core/testing';

import { DisplayServicesService } from './services/display-services.service';

describe('DisplayServicesService', () => {
  let service: DisplayServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
