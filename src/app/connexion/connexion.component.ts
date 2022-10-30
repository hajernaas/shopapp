import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
user:User={
  email: '',
  password: ''
}
connexionForm:FormGroup;
email:FormControl;
password:FormControl;

  constructor(private fb:FormBuilder) {
  this.email=fb.control("",[Validators.email,Validators.required]);
  this.password=fb.control("",[Validators.required,Validators.minLength(8)]);
  this.connexionForm=fb.group({
   email:this.email,
   password:this.password,
  })

   }

  ngOnInit(): void {
  }

  handleSubmit()
  {
    console.log("ccccc");
    console.log(this.connexionForm.valid);
  }




}
