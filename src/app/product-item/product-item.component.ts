import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
 @Input() prod:Product | undefined
 @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>()
 @Output() displayProductModal: EventEmitter<Product> = new EventEmitter<Product>()
 @Output() displayDetailsProduct: EventEmitter<Product> = new EventEmitter<Product>()
 constructor() { }

  ngOnInit(): void {
    console.log("produit1");
    console.log(this.prod);
    console.log("ccccc");
  }

  OnClickProduct(produc:Product|undefined){
   console.log(produc);
  }

  DeleteProduct(p: Product | undefined){
    // console.log(p);
    //   this.deleteProductItem.emit(p);
  }

  AfficherProduct(p: Product| undefined){
      //console.log("aaaa");
    this.displayProductModal.emit(p);
  }

  Alldetails(p:Product|undefined) {
    console.log("identifiant",p?.id);
    this.displayDetailsProduct.emit(p);
    console.log("rrrr");
 }

}
