import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Http } from '@angular/http/src/http';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });
  /*
  let authService: AuthService;

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('#getValue should return real value from the real service', () => {
    authService = new AuthService(new Http());
    expect(authService.getProfile()).toBe('real value');
  });

  it('#getValue should return faked value from a fakeService', () => {
    authService = new AuthService(new FakeHttp());
    expect(authService.getProfile()).toBe('faked service value');
  });*/

});
