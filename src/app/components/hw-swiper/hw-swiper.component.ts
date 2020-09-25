import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import Swiper, { Autoplay, EffectFade } from 'swiper';
@Component({
  selector: 'hw-swiper',
  templateUrl: './hw-swiper.component.html',
  styleUrls: ['./hw-swiper.component.scss']
})
export class HwSwiperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Swiper.use([Autoplay, EffectFade]);
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 'auto',
      speed: 2000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    })
  }

}
