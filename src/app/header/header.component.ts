import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { auth_items, nav_items } from '../appi/nav';
import { NavBar } from '../model/nav-bar';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {
data: Number | undefined
second:Number | undefined
secondSub:Subscription |undefined
siteName:string=environment.siteName;
nav:NavBar[]=nav_items;
auth_data:NavBar[]=auth_items;

constructor(private productService:ProductService) { }

  ngOnInit(): void {
   /* this.productService.getNumber()
    .subscribe((value)=>{this.data=value})
    this.productService.getSecond()
    .subscribe((value)=>{this.second=value})*/
console.log(this.nav);
console.log(this.auth_data);

    this.secondSub=this.productService.getSecond()
    .subscribe({
       next: (value:Number)=>{
         this.second = value;
        },
       error: (error:any)=>{
        console.log(error);
      },
       complete:()=>{
        console.log("complete");
      }
      }  )

  }
  auth_items(auth_items: any) {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy():void{
this.secondSub?.unsubscribe ()

  }







}
