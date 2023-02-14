import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable , of , interval} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ResultRequest } from '../model/result-request';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products:Product[]=[];
private UrlApi:string=environment.serveurUrl.products;

  constructor(private http:HttpClient) {

   }

   getProducts(): Observable<ResultRequest<Product>> {
      console.log("aaaazzzz");
      return  (this.http.get<ResultRequest<Product>>(this.UrlApi))
   }




  /*getProducts(): Promise<Product[]>
  {
    //return this.products ;
     return new Promise( (resolve, reject)=> {
         if(this. products.length)
         { resolve(this.products)}
         else
         {
          reject([])
         }

     })

  }*/

  addProducts(P:Product) {}
  editProducts(id_product:string,p:Product){}
  deleteProducts(id_product:string){}
  getNumber():Observable<Number>{
    return of(45)
  }
  getSecond():Observable<Number>{
    return interval(3000)
  }

}
