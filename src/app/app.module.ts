import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Products/products.component-Amer-PC';
import { HooksComponentComponent } from './hooks-component/hooks-component.component';
import { HeaderComponent } from './header/header.component-Amer-PC';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LeftNavComponent } from './main-layout/left-nav/left-nav.component';
import { RightNavComponent } from './main-layout/right-nav/right-nav.component';
import { IdentityModule } from '../identity/identity.module';
import { FormsModule } from '@angular/forms';
import { FilesizePipe } from './Pipes/filesize.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EternalConsumeComponent } from './eternal-consume/eternal-consume.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubProductsComponent } from './sub-products/sub-products.component';
import { RatingComponent } from './sub-products/rating/rating.component';
import { CommentComponent } from './sub-products/comment/comment.component';
import { RegisterComponent } from '../identity/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HooksComponentComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LeftNavComponent,
    RightNavComponent,
    FilesizePipe,
    ProductDetailsComponent,
    EternalConsumeComponent,
    NotFoundComponent,
    SubProductsComponent,
    RatingComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdentityModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
