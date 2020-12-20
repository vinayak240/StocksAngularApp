import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API_URL from './api_urls';
import Sector from '../models/Sector';

@Injectable({
  providedIn: 'root'
})
export class SectorServiceService {
  constructor(private http: HttpClient) {}

  getSectors() {
    return this.http.get(API_URL.base_url_sector);
  }
  saveSectors(sector: Sector) {
    return this.http.post(API_URL.base_url_sector, sector);
  }
  getSectorCompanies(name: string) {
    return this.http.get(`${API_URL.base_url_sector}/${name}/companies`);
  }
}
