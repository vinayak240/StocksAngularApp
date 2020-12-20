import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API_URL from './api_urls';
import Exchange from '../models/Exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeServiceService {
  constructor(private http: HttpClient) {}

  getExchanges() {
    return this.http.get(API_URL.base_url_exchange);
  }
  saveExchanges(exchange: Exchange) {
    return this.http.post(API_URL.base_url_exchange, exchange);
  }
  getExchangeCompanies(name: string) {
    return this.http.get(`${API_URL.base_url_exchange}/${name}/companies`);
  }
}
