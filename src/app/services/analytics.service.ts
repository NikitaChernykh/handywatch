import { Injectable } from '@angular/core';

declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  gtmEvent = (category, action, label) => {
    window.dataLayer.push({
      event: "customEvent",
      category: category,
      action: action,
      label: label
    });
  };

  gtmVitrualPageView = pageName => {
    window.dataLayer.push({
      event: "virtualPageView",
      pageName: pageName,
      pageURL: window.location.href
    });
  };
}
