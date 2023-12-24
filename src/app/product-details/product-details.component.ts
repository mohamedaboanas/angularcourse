import { Component } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  constructor(private _productList: ProductsService) {}
  prdList = this._productList.getProductsList();
}
