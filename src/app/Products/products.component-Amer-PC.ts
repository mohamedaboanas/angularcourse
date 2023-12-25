import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { IPVersion } from 'net';
import { IProducts } from '../Interfaces/IProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component-Amer-PC.html',
  styleUrls: ['./products.component-Amer-PC.scss'],
})
export class ProductsComponent implements OnInit {
  title: string = 'Angular Course - Products';
  isValid: boolean = true;
  Status: string = 'Success';
  Num: number = 0;
  createdDate = new Date();
  price = 500.0;
  percentage = 5;

  message: string = 'Hello with our angular course.';

  lst = [1, 2, 3, 4];
  file: number = 1048576;

  students = [
    { id: 1, name: 'Mohamed', age: 42 },
    { id: 2, name: 'Ahmad', age: 20 },
    { id: 3, name: 'Anas', age: 22 },
    { id: 4, name: 'Omar', age: 35 },
  ];

  constructor(private _productList: ProductsService) {}
  prdList: IProducts[] = [];
  errMsg: string = '';
  ngOnInit(): void {
    this._productList.getProductsList().subscribe({
      next: (data) => (this.prdList = data),
      error: (error) => (this.errMsg = error),
    });
  }
}
