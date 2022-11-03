import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-additional',
  templateUrl: './product-additional.component.html',
  styleUrls: ['./product-additional.component.css']
})
export class ProductAdditionalComponent implements OnInit {
  prod : Product |undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
