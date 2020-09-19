import { Component } from '@angular/core';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})

export class HeroSectionComponent {
  slideNames = ['cf-slide1.png', 'cf-slide2.png', 'cf-slide3.png', 'cf-slide4.png'];
  slideName = this.slideNames[0];
  link = 'https://gallery.fitbit.com/developer/12152438-2164-45e6-8de8-e408fb54f9a6';

  constructor() { }

  onClick() {
    document.location.href = this.link;
  }
}
