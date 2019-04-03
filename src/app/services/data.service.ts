import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  get(url: string, params?: any) {
    return this.http.get(url, params);
  }
  post(url: string, data: any, params?: any) {
    return this.doPost(url, data, params);
  }

  delete(url: string, params?: any) {
    return this.http.delete(url, params);
  }

  doPost(url: string, data: any, params?: any) {
    return this.http.post(url, data, params);
  }

  postFile(url: string, data: any) {
    return this.http.post(url, data);
  }
}


