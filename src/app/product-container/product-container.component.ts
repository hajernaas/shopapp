import { Component, createPlatform, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { category } from '../model/category';
import { Product } from '../model/product';
import { ResultRequest } from '../model/result-request';
import { CategoriesService } from '../services/categories.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  products:Product[]=[];
  isLoading:boolean=true;
  categorySub: Subscription | undefined;
  productSub: Subscription | undefined;
  categories:ResultRequest<category>|undefined;
  current_categories :category|undefined;
  isDisplayModal: boolean =false;
  modalProduct:Product|undefined;
  @Input() prod:Product|undefined;
  @Output() displayDetailsProduct: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(private category_service: CategoriesService, private productService: ProductService) { }

  ngOnInit(): void {
    console.log("products_container",this.prod);
    this.categorySub = this.category_service.getCategory()
      .subscribe({
         next: (res:ResultRequest<category>) => {
          if (res.isSuccess){
              this.categories = res;
            //console.log("liste categories", this.categories);
              this.handleClick(null,this.categories.results[3])
          }
          this.isLoading=false;
         },
        error:(error:any)=>{
          console.log("error", error);
          this.isLoading=true;
        },
        complete:()=>{
          console.log("complete");
        }
      })
  }

  ngOnDestroy(): void {
    this.categorySub?.unsubscribe();
    this.productSub?.unsubscribe();
  }

  handleClick(event:any,c:category){
    this.current_categories=c;
    window.scrollTo(0,0);
    console.log("ttttt",c);
    if (event){event.preventDefault()}
    this.productSub=this.productService.getProducts().subscribe(
      {
         next:(resultData:ResultRequest<Product>)=>{
           if(resultData.isSuccess){
             let products=resultData.results
                 console.log("liste_produits",products)
                 this.products=products.filter((product:Product)=>{
            //  console.log("nbr elements dans category",product.categories.length)
                 for (let index = 0; index < product.categories.length; index++) {
                    if(product.categories[index].slug===c.slug){
                              return true;
                    }
            }
          return false;
          })
          console.log("rrrrr",this.products);
        }
      }
    })
  }


  handleDisplayProductModal(prod:Product){
       if (prod){
         this.isDisplayModal = true
         this.modalProduct = prod
        }
  }

  handlecloseM(){
     console.log("aaannnbbb")
     this.isDisplayModal = false
     this.modalProduct = undefined
  }

  Alldetails(prod:Product) {
     console.log("identifiant",prod.categories[0].id)
     this.displayDetailsProduct.emit(prod);
     console.log("rrrr");
  }
}
