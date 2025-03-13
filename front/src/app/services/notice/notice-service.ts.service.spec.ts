import { TestBed } from '@angular/core/testing';

import { NoticeServiceTsService } from './notice-service.ts.service';

describe('NoticeServiceTsService', () => {
  let service: NoticeServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticeServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
