import { TestBed } from '@angular/core/testing';

import { MyPaymentsService } from './my-payments.service';

describe('MyPaymentsService', () => {
  let service: MyPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
