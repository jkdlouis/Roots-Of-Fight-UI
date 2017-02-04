import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  private myInterval: boolean = false;
  private slides: any[] = [];
  private activeSlideIndex: number;
  private noWrapSlides: boolean = false;


}
