import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../model/product';
import { ResultRequest } from '../model/result-request';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  productSub:Subscription|undefined;
  Products:Product[]=[];
  isLoading:boolean=true;
  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.productSub=this.productService.getProducts()
  .subscribe({
    // next: (p:Product[])=>{
      next: (resultData:ResultRequest<Product>)=>{
    //console.log("fff",resultData)
       if (resultData.isSuccess){
        this.Products=resultData.results;
       }
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


  ngOnDestroy(): void {
    this.productSub?.unsubscribe;
  }



}
