import { Component, OnInit, Input } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'hw-link',
  templateUrl: './hw-link.component.html',
  styleUrls: ['./hw-link.component.scss']
})
export class HwLinkComponent implements OnInit {
  @Input() linkText;
  @Input() url;

  constructor(private analyticService: AnalyticsService) { }

  ngOnInit() {
  }

  linkClick() {
    this.analyticService.gtmEvent(
      "Href link with text: " + this.linkText,
      "Click",
      "Link URL: " + this.url);
  }

}
