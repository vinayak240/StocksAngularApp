import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API_URL from './api_urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string, userType: string) {
    const obj = {
      username: username,
      password: password
    };
    return this.http.post(
      API_URL[userType === 'admin' ? 'admin_login' : 'user_login'],
      obj
    );
  }

  register(username: string, password: string, email: string) {
    const obj = { username, password, email };

    return this.http.post(API_URL['user_register'], obj);
  }
}
