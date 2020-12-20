import { TestBed } from '@angular/core/testing';

import { OnlyAdminUsersGuard } from './only-admin-users.guard';

describe('OnlyAdminUsersGuard', () => {
  let guard: OnlyAdminUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyAdminUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
