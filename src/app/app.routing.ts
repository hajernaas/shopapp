import { Routes } from "@angular/router"
import { ConnexionComponent } from "./connexion/connexion.component"
import { ContainerComponent } from "./container/container.component"
import { ProductAdditionalComponent } from "./product-additional/product-additional.component"
import { ProductDescriptionComponent } from "./product-description/product-description.component"
import { ProductReviewsComponent } from "./product-reviews/product-reviews.component"
import { ProductVendorComponent } from "./product-vendor/product-vendor.component"
import { ProductComponent } from "./product/product.component"
import { SignInComponent } from "./sign-in/sign-in.component"
import { SignupComponent } from "./signup/signup.component"



export const ROUTES: Routes = [
  {
    path: '',
    component: ContainerComponent,
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignInComponent,
    pathMatch: 'full'
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
    pathMatch: 'full'
  },

  {
    path: 'product/:id',
    component: ProductComponent,
    //pathMatch:'full'
    children: [
      {
        path:'',
        redirectTo:'description',
        pathMatch:'prefix'
      },
      {
        path:'description',
        component:ProductDescriptionComponent
      },
      {
        path:'additional-info',
        component:ProductAdditionalComponent
      },
      {
        path:'reviews',
        component:ProductReviewsComponent
      },
      {
        path:'vendor',
        component:ProductVendorComponent
      },

    ]







  }


]
