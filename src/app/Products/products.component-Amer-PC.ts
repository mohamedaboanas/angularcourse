import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component-Amer-PC.html',
  styleUrls: ['./products.component-Amer-PC.scss'],
})
export class ProductsComponent {
  title: string = 'Products';
  isValid: boolean = true;
  Status: string = 'Success';
  Num: number = 0;
  lst = [1, 2, 3, 4];
  students = [
    { id: 1, name: 'Mohamed', age: 42 },
    { id: 2, name: 'Hassan', age: 20 },
    { id: 3, name: 'Anas', age: 22 },
    { id: 4, name: 'Omar', age: 35 },
  ];
}
