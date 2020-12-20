import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API_URL from './api_urls';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadStocks(data: any) {
    return this.http.post(API_URL.upload_stocks, data);
  }
}
