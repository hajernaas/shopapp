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
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatSliderModule } from '@angular/material';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';


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
    AsideComponent,
    HomeSliderComponent,
    ProductContainerComponent,
    HeaderTitleComponent,
    PageTitleComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
