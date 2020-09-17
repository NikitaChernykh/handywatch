import { Component } from '@angular/core';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})

export class HeroSectionComponent {
  slideNames = ['cf-slide1.png', 'cf-slide2.png', 'cf-slide3.png', 'cf-slide4.png'];
  slideName = this.slideNames[0];

  constructor() { }
}
