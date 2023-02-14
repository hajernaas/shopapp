import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../model/category';
import { ResultRequest } from '../model/result-request';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private urlCat:string=environment.serveurUrl.categorie;

  constructor(private http:HttpClient) { }


  getCategory(): Observable<ResultRequest<category>> {
    return this.http.get<ResultRequest<category>>(this.urlCat);
  }




}
