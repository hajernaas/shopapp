import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contact';
import { User } from '../model/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
/*contactUser:Contact={
  firstname: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}*/

/*names=['theresa','Morris','Duane','Taz'];
cost='200.13';
nam="jean Michel";
show=true;*/



  contactUser:Contact|undefined;
   contactForm:FormGroup;
   emailForm: FormControl;
   firstnameForm:FormControl;
   phoneForm: FormControl;
   subjectForm:FormControl;
   messageForm:FormControl;
   emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
   phoneRegex="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}";

  constructor(private fb:FormBuilder) {
  this.emailForm=fb.control("",[Validators.email,Validators.required,Validators.pattern(this.emailRegex)]);
  this.firstnameForm=fb.control("",[Validators.required,Validators.minLength(3)]);
  this.phoneForm=fb.control("",[Validators.required,Validators.pattern(this.phoneRegex)]);
  this.subjectForm=fb.control("",[Validators.required,Validators.minLength(10)]);
  this.messageForm=fb.control("",[Validators.required,Validators.minLength(20)]);
  this.contactForm=fb.group({
  email:this.emailForm,
  firstname:this.firstnameForm,
  phone:this.phoneForm,
  subject:this.subjectForm,
  message:this.messageForm,
  });


  }

  //OnClick(){this.show=!this.show};

  ngOnInit(): void {
    window.scrollTo(0,0);
  }


  SubmitContact(){

   // this.contactUser.firstname=this.contactForm.value.firstname;
    //this.contactUser.email=this.contactForm.value.email;
    /*
    this.contactUser.firstname=this.firstnameForm.value;
    this.contactUser.email=this.emailForm.value;
    this.contactUser.phone=this.contactForm.value.phone;
    this.contactUser.subject=this.contactForm.value.subject;
    this.contactUser.message=this.contactForm.value.message;*/
    this.contactUser={
      firstname:this.firstnameForm.value,
      email:this.emailForm.value,
      phone:this.phoneForm.value,
      subject:this.subjectForm.value,
      message:this.messageForm.value,

    }
  }
}
 /*console.log("First Name:",this.contactUser.firstname);
 console.log("Email:",this.contactUser.email);
 console.log("Phone:",this.contactUser.phone);
 console.log("Subject:",this.contactUser.subject);
 console.log("Message:",this.contactUser.message);
 console.log(this.contactForm.value);*/

