import { Component, OnInit } from '@angular/core';
/*import * as $ from 'jquery';*/
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    $('.testimonials').slick({
      slidesToShow: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 8000,
      adaptiveHeight: true,
      arrows: false,
    });
  }

}
