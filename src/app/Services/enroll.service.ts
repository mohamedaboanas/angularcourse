import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  constructor(private _http: HttpClient) {}
  _baseUrl: string = 'http://localhost:2000/registerForm';
  enroll(data: any) {
    return this._http.post(this._baseUrl, data);
  }
}
