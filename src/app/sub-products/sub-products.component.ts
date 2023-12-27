import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-sub-products',
  templateUrl: './sub-products.component.html',
  styleUrl: './sub-products.component.scss',
})
export class SubProductsComponent implements OnInit {
  productId: any;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {}

  Next() {
    this._router.navigate(['sub-products', parseInt(this.productId) + 1]);
  }
  Prev() {
    this._router.navigate(['sub-products', parseInt(this.productId) - 1]);
  }

  GoBack() {
    this._router.navigate(['product-details', { id: this.productId }]);
  }

  GoToRating() {
    this._router.navigate(['rating'], { relativeTo: this._activateRoute });
  }
  GoToComment() {
    this._router.navigate(['comment'],{relativeTo: this._activateRoute});
  }
  ngOnInit(): void {
    // use the param for one time without any update from components
    // this.productId = this._activateRoute.snapshot.paramMap.get('id');
    // use the param for one time with update from components
    this._activateRoute.paramMap.subscribe((next: ParamMap) => {
      this.productId = next.get('id');
    });
  }
}
