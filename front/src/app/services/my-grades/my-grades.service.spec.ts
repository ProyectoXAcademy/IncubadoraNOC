import { TestBed } from '@angular/core/testing';

import { MyGradesService } from './my-grades.service';

describe('MyGradesService', () => {
  let service: MyGradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
