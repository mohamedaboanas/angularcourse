import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { IProducts } from '../Interfaces/IProducts';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _productList: ProductsService) {}

  prdList: IProducts[] = [];
  errMsg: string = '';
  ngOnInit(): void {
    this._productList.getProductsList().subscribe({
      next: (data) => (this.prdList = data),
      error: (error) => (this.errMsg = error),
    });
  }
  //      this._productList.getProductsList().subscribe(
  //       data => {
  //         this.prdList = data
  //       },
  //       (error) => {
  //         this.errMsg = error
  //       }
  //      );
}
