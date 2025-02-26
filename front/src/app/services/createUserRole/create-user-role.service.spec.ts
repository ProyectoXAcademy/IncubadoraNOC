import { TestBed } from '@angular/core/testing';

import { CreateUserRoleService } from './create-user-role.service';

describe('CreateUserRoleService', () => {
  let service: CreateUserRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUserRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
