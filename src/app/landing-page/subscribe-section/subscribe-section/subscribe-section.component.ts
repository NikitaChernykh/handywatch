import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import MicroModal from 'micromodal';
import confetti from 'canvas-confetti';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'subscribe-section',
  templateUrl: './subscribe-section.component.html',
  styleUrls: ['./subscribe-section.component.scss']
})

export class SubscribeSectionComponent implements OnInit {
  isLoading = false;
  email = new FormControl('');
  emailForm = new FormGroup({
    email: new FormControl('')
  });

  constructor(private httpClient: HttpClient, private analyticService: AnalyticsService) { }

  ngOnInit() {
    MicroModal.init();
  }

  onClick() {
    MicroModal.close();
    this.analyticService.gtmEvent(
      "Subscribe Section",
      "Click",
      "Closed Modal With OK");
  }

  onSubmit() {
    this.isLoading = true;
    this.analyticService.gtmEvent(
      "Subscribe Section",
      "Click",
      "Submit Button");
    const data = {
      method: 'POST',
      body: JSON.stringify({ email: this.emailForm.value.email }),
      headers: { 'Content-Type': 'application/json' }
    }
    this.httpClient.post('https://handywatch-service.herokuapp.com/subscribe', data.body, { headers: { 'Access-Control-Allow-Origin': 'https://handy.watch', 'Content-Type': 'application/json' } }).subscribe(res => {
      MicroModal.show('modal-success');
      confetti({
        particleCount: 50,
        spread: 55
      });

      this.isLoading = false;

      this.analyticService.gtmEvent(
        "Subscribe Section",
        "State",
        "Success Modal Shown");
    }, err => {
      MicroModal.show('modal-error');

      this.isLoading = false;

      this.analyticService.gtmEvent(
        "Subscribe Section",
        "State",
        "Error Modal Shown");
    });
  }
}
