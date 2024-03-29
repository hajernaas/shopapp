import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { auth_items, nav_items } from '../appi/nav';
import { NavBar } from '../model/nav-bar';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  nav:NavBar[]=nav_items;
  auth_data:NavBar[]=auth_items;
  @ Output () close: EventEmitter<string>= new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }


  handleClose(){
    this.close.emit();
  }

}
