import { category } from "./category";

export interface Product {
  id:string,
  name:string,
  desc:string,
  stock?:string;
  categories:category[],
  imgURL:string[],
  new_prix:number,
  old_prix:number,
  created_date:Date,
  MAJ_date?:Date,
  color?:string[],
  size?:string[],
  additional_info?:string,
  vendor_info?:string,
  reviews?:string,

}
