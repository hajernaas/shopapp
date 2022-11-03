import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-vendor',
  templateUrl: './product-vendor.component.html',
  styleUrls: ['./product-vendor.component.css']
})
export class ProductVendorComponent implements OnInit {
  prod : Product |undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
