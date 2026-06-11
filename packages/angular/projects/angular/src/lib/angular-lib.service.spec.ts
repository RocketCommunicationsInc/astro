import { TestBed } from '@angular/core/testing';

import { AngularLibService } from './angular-lib.service';

describe('AngularLibService', () => {
  let service: AngularLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
