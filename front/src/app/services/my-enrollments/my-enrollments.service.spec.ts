import { TestBed } from '@angular/core/testing';

import { MyEnrollmentsService } from './my-enrollments.service';

describe('MyEnrollmentsService', () => {
  let service: MyEnrollmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyEnrollmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
