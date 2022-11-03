import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Observable , of , interval, Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit ,OnDestroy {
  Product: Product|undefined;
  id:string|undefined;
  productSub:Subscription | undefined;
  isLoading: boolean = true;
  img_current:string|undefined;
  //img_next:string|undefined;

  constructor(private route:ActivatedRoute, private productService:ProductService) {
  }
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.id=this.route.snapshot.params["id"]
    //console.log(this.id);
    this.productSub=this.productService.getProducts()
    .subscribe({
       next: (products:Product[])=>{
        this.Product=products.filter(p=> p.id===this.id)[0]
          this.isLoading=false;
          this.img_current=this.Product.imgURL[0];
        console.log("pppaaa", this.Product)
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

/*
  handleDisplayProductDetails(prod:Product)
  {
    console.log("dddd",prod.id);
    console.log("eeee");
  }*/

  handleChangeCurrentImage(imgnext:string)
  {
    this.img_current=imgnext;
  }



}


