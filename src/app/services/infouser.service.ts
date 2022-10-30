import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class InfouserService {
  user:User={
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    passwordConfirm:''
  }


 /* private user:User[]=[];
private urlApiUser:string=environment.serveurUrl_user;*/


  constructor(/*private http:HttpClient*/) {
  this.user.firstname="naas";
  this.user.lastname="hajer";
  this.user.email="naas.hajer@gmail.com";
  this.user.password="Addouma2013";
  this.user.passwordConfirm="Addouma2013";


  }
 /* getUser(): Observable<User[]>
  {
    console.log("aaaa");
    console.log("list des utilisateurs", this.user);

    return  this.http.get<(User[])>(this.urlApiUser);

  }*/




}


