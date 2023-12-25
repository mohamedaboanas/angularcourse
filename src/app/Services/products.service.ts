import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../Interfaces/IProducts';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // _baseUrl = 'https://www.google.com/api';
  _baseUrl = '/assets/Products.json';
  constructor(private _http: HttpClient) {}
  getProductsList() {
    return this._http.get<IProducts[]>(this._baseUrl).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'Server Not Found');
      })
    );
  }
}
