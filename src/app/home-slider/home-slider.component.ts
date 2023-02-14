import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { homeslider } from '../appi/homeslider';
import { slide } from '../model/slide';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit ,OnDestroy {

  slider: slide[] = homeslider;
  current_slide: slide = this.slider[0];
  current_index: number = 0;
  indexObes:Observable<number>=interval(5000);
  indexSub: Subscription|undefined;

  constructor() { }

  ngOnInit(): void {
    this.indexSub=this.indexObes.subscribe({
       next:(value:number)=>{
          this.handlechangeImage(1)}
    })
  }

  ngOnDestroy(): void {
    this.indexSub?.unsubscribe;
   }

  handlechangeImage(nb: number) {
    let newindex;

      if (nb === 1) {
        newindex = this.current_index - 1;
          if (newindex >= 0)
             this.current_index = newindex;
          else
             this.current_index = this.slider.length - 1;
      }

      if (nb === -1) {
        newindex = this.current_index + 1;
          if(newindex >this.slider.length - 1)
             this.current_index=0;
          else
             this.current_index = newindex;
      }
  }

}
