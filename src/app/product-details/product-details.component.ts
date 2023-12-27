import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { IProducts } from '../Interfaces/IProducts';
import { __values } from 'tslib';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _productList: ProductsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  prdList: IProducts[] = [];
  errMsg: string = '';
  idParam:any;

  GoToSubproducts(product: IProducts) {
    let id: number = product.id;
    this._router.navigate(['/sub-products', id]);
  }
  isActive(product:IProducts){
    return product.id == this.idParam;
  }
  ngOnInit(): void {
    this._productList.getProductsList().subscribe({
      next: (data) => (this.prdList = data),
      error: (error) => (this.errMsg = error),
    });

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.idParam = param.get('id');
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
