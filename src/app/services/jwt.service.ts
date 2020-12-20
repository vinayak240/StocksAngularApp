import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor() {}

  saveToken(token: any) {
    window.localStorage.setItem('isAuthenticated', 'yes');
    window.localStorage.setItem('username', token.uname);
    window.localStorage.setItem('userType', token.userType || '');
    window.localStorage.setItem('token', token.token);
  }

  resetToken() {
    window.localStorage.removeItem('isAuthenticated');
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('userType');
    window.localStorage.removeItem('token');
  }
  getIsAuthenticated() {
    return window.localStorage.getItem('isAuthenticated') === 'yes';
  }
  getUserName() {
    return window.localStorage.getItem('username');
  }

  getUserType() {
    return window.localStorage.getItem('userType');
  }

  getToken() {
    return window.localStorage.getItem('token');
  }
}
