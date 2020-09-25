import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {
  todaysYear
  constructor() { }

  ngOnInit() {
    this.todaysYear = new Date().getFullYear();
  }

}
