import { Component, OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription , Observable} from 'rxjs';
import { User } from '../model/user';
import { InfouserService } from '../services/infouser.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
/*user:User={
  lastname: "",
  firstname: '',
  email: '',
  password: '',
  passwordConfirm:''
}*/

 // userSub:Subscription|undefined;
 messageError:string=""
  constructor(private userService:InfouserService) {


   }

  ngOnInit(): void {

 /*   this.userSub=this.userService.getUser().subscribe({

      next:(u:User[])=>{this.user=u;
      console.log("users",this.user);
      },
      error:(error:any)=>{
      console.log("error",error);

      },
      complete:()=>{console.log("complete");}





    });*/

  }
/*
  ngOnDistroy():void{
    this.userSub?.unsubscribe();


  }
  */

  handleSubmit(f:NgForm){
  /* console.log("user:",this.user);*/



  let firstname=f.value["FirstName"];
  let lastname=f.value["LastName"];
  let email=f.value["Email"];
  let password=f.value["pass"];
  let passwordconfirm=f.value["passConfirm"];

  if( (firstname==this.userService.user.firstname)&& (lastname==this.userService.user.lastname)
  && (email==this.userService.user.email) && (password==this.userService.user.password)
  &&  (passwordconfirm==this.userService.user.passwordConfirm))
  {

    console.log("aaaaa");
    alert("connexion avec succés");
  }
  else{
    console.log("ccccc");
    this.messageError="champs invalide";
  }



  }


}
