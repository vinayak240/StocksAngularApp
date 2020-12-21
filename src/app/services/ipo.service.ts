import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IPO from '../models/IPO';
import API_URL from './api_urls';
@Injectable({
  providedIn: 'root'
})
export class IpoService {
  constructor(private http: HttpClient) {}

  saveIpos(ipo: IPO) {
    return this.http.post(API_URL.base_url_ipo, ipo);
  }
  getIpos() {
    return this.http.get(API_URL.base_url_ipo);
  }
}
