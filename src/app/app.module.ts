import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import{ HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routing';
import { LoadingComponent } from './loading/loading.component';
import { PayementCardComponent } from './payement-card/payement-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductAdditionalComponent } from './product-additional/product-additional.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductVendorComponent } from './product-vendor/product-vendor.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    ModalProductComponent,
    SignInComponent,
    SignupComponent,
    ConnexionComponent,
    LoadingComponent,
    PayementCardComponent,
    ProductDetailsComponent,
    ProductDescriptionComponent,
    ProductAdditionalComponent,
    ProductReviewsComponent,
    ProductVendorComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
