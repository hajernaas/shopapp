import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string="";
  listUser1:string[]=[];
  listUser2:string[]=[];
  position:number=-1;
  name:string="";
  test:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  handleSave()
  {

  // this.test=this.updateUser(this.position);


      if (this.firstName)
      {
        this.listUser1=this.listUser2;
        console.log("tableau 3",this.listUser1);
         if ((this.test)==false)
          {console.log("firstname", this.firstName )
          console.log(this.position);
          console.log(this.test);
          this.listUser1.push(this.firstName);
         // console.log(this.listUser);
         // console.log(this.listUser.length);
          }

        // if ((this.test)==true)
        else
         {this.listUser1.splice(this.position,0,this.firstName);}
         // console.log("tab",this.listUser);
        // console.log(this.listUser.length);
        }

       console.log("tableau1",this.listUser1);

       this.listUser2=this.listUser1.slice(0);



      // this.listUser2=this.listUser1;
       console.log("tableau2",this.listUser2);

        this.firstName="";
   }












  deleteUser(i:number){

   if(i>=0)
   {this.listUser1.splice(i,1)}

  }
updateUser(i:number)
{
  if(i>=0)
   { const n=this.listUser1[i];
    this.position=i;
    console.log("position",i);
    this.listUser1.splice(i,1);
    this.firstName=n;
    //this.name=this.firstName;
   }


    if(this.position>=0 )
    {
      console.log(this.position);
      console.log("firstname", this.firstName );
      this.test=true;
    }
  }






}





