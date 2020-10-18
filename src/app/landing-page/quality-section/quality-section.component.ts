import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'quality-section',
  templateUrl: './quality-section.component.html',
  styleUrls: ['./quality-section.component.scss']
})

export class QualitySectionComponent implements OnInit {

  link = 'https://gallery.fitbit.com/developer/12152438-2164-45e6-8de8-e408fb54f9a6';

  constructor(private analyticService: AnalyticsService) { }

  ngOnInit() { }

  onClick() {
    document.location.href = this.link;

    this.analyticService.gtmEvent(
      "Quality Section",
      "Click",
      "Discover Quality");
  }
}
