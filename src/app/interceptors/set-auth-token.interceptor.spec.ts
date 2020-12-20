import { TestBed } from '@angular/core/testing';

import { SetAuthTokenInterceptor } from './set-auth-token.interceptor';

describe('SetAuthTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SetAuthTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SetAuthTokenInterceptor = TestBed.inject(SetAuthTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
