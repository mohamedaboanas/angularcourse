import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  getProductsList() {
    return [
      { name: 'Laptop', price: 3000 },
      { name: 'TV', price: 4000 },
      { name: 'Screen', price: 1000 },
      { name: 'Mobile', price: 2000 }
    ];
  }
}
