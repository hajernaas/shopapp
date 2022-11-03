import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@ Input() prod:Product |undefined;

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeProductDetails(component: any){
    // console.log({params:component,Product:this.prod});
    component.prod=this.prod;

  }



}
