import { Routes } from "@angular/router"
import { ConnexionComponent } from "./connexion/connexion.component"
import { ContainerComponent } from "./container/container.component"
import { ProductComponent } from "./product/product.component"
import { SignInComponent } from "./sign-in/sign-in.component"
import { SignupComponent } from "./signup/signup.component"



export const ROUTES: Routes=[
 {
   path:'',
   component:ContainerComponent,
   pathMatch:'full'
 },

 {
  path:'signup',
  component:SignInComponent ,
  pathMatch:'full'
},
 {
  path:'connexion',
  component:ConnexionComponent,
  pathMatch:'full'
},

{
  path:'product/:id',
  component:ProductComponent,
  pathMatch:'full'
}


]
