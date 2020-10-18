import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {
  public todaysYear: number

  constructor(private analyticService: AnalyticsService) { }

  ngOnInit() {
    this.todaysYear = new Date().getFullYear();
  }

  linkClick(linkText) {
    this.analyticService.gtmEvent(
      "Footer",
      "Click",
      "Link text: " + linkText);
  }

}
