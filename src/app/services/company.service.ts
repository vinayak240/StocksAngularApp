import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API_URL from './api_urls';
import Company from '../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get(API_URL.base_url_company);
  }
  saveCompany(com: Company) {
    return this.http.post(API_URL.base_url_company, com);
  }
  getCompany(code: string) {
    return this.http.get(`${API_URL.base_url_company}/${code}`);
  }
  updateCompany(code: string, com: Company) {
    return this.http.put(`${API_URL.base_url_company}/${code}`, com, {
      responseType: 'text'
    });
  }

  getCompanyStocksPrice(
    code: string,
    from: string,
    to: string,
    period: string
  ) {
    return this.http.get(
      `${API_URL.base_url_company}/${code}/stocks/${from}/${to}/${period}`
    );
  }
}
