import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
login_url='/dj-rest-auth/login/';
logout_url='/dj-rest-auth/logout/';


  constructor(private http:HttpClient) { }
/*
  login(pUsername,pPassword)
  {
    const login_data={
      username:pUsername,
      pass:pPassword,

    }
    return new Observable<boolean>();
  }*/
}
