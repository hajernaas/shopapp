import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../services/product.service';
import { Observable , of , interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy {

  title:string="my shop";
  Product: Product[]=[];
  isDisplayModal: boolean =false;
  isLoading: boolean= true;
  modalProduct:Product|undefined;
  /* créer une varibale productSub pour sauvegader mon observable */
  productSub:Subscription | undefined;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

  //this.Product=this.productService.getProducts()
  //console.log(this.Product);
  /* function en cas de promise
  this.productService.getProducts()
  .then((p:Product[])=>{this.Product=p})
  .catch( ()=>{this.Product=[]})*/
/*fonction en cas d'observable*/
  this.productSub=this.productService.getProducts()
  .subscribe({
     next: (p:Product[])=>{
      this.Product=p;
      this.isLoading=false;
      console.log("pppaaa")
      },
     error: (error:any)=>{
      console.log("Error:",error);
      this.isLoading=true;
    },
     complete:()=>{
      console.log("complete");
    }
    }  )




  }

  ngOnDestroy():void{
    this.productSub?.unsubscribe ()

      }



  handleDeleteProduct(prod:Product){
    //console.log("haundleDeleteProduct", prod);
  this.Product=this.Product.filter(p=> p.id!==prod.id)

  }

  handleDisplayProductModal(prod:Product)
  {

       if (prod){
         this.isDisplayModal = true
         this.modalProduct = prod

       }
  }

  handlecloseM()
  {
    console.log("aaannnbbb")
    this.isDisplayModal = false
    this.modalProduct = undefined
  }


}
