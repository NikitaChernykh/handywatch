import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quality-section',
  templateUrl: './quality-section.component.html',
  styleUrls: ['./quality-section.component.scss']
})
export class QualitySectionComponent implements OnInit {

  link = 'https://gallery.fitbit.com/developer/12152438-2164-45e6-8de8-e408fb54f9a6';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    document.location.href = this.link;
  }
}
