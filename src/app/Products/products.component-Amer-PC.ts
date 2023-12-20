import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  title: string = 'Products';
  isValid: boolean = true;
  Status: string = 'Success';
  Num:number = 0;
}
