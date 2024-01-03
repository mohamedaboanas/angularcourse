import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Products/products.component-Amer-PC';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubProductsComponent } from './sub-products/sub-products.component';
import { RatingComponent } from './sub-products/rating/rating.component';
import { CommentComponent } from './sub-products/comment/comment.component';
import { RegisterComponent } from '../identity/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'sub-products/:id',
    component: SubProductsComponent,
    children: [
      { path: 'rating', component: RatingComponent },
      { path: 'comment', component: CommentComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
