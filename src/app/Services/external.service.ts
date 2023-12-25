import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IExternal } from '../Interfaces/IExternal';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  _baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) {}
  // Get External Products

  getExternalProducts() {
    return this._http.get<IExternal[]>(this._baseUrl).pipe(
      catchError((err: any) => {
        return throwError(() => err.message || `Server Not Found`);
      })
    );
  }
}
