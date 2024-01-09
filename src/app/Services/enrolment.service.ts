import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../Classes/register';

@Injectable({
  providedIn: 'root',
})
export class EnrolmentService {
  
  _baseUrl = 'http://localhost:2000/';
  constructor(private _http: HttpClient) {}

  FormPost(body: Register) {
    return this._http.post(this._baseUrl + 'registerForm', body);
  }
}
