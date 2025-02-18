import { TestBed } from '@angular/core/testing';

import { MyAttendanceService } from './my-attendance.service';

describe('MyAttendanceService', () => {
  let service: MyAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
