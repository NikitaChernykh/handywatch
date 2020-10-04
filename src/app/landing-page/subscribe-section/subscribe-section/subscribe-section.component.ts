import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import MicroModal from 'micromodal';
import confetti from 'canvas-confetti';

@Component({
  selector: 'subscribe-section',
  templateUrl: './subscribe-section.component.html',
  styleUrls: ['./subscribe-section.component.scss']
})

export class SubscribeSectionComponent implements OnInit {
  email = new FormControl('');
  emailForm = new FormGroup({
    email: new FormControl('')
  });

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    MicroModal.init();
  }

  onClick() {
    MicroModal.close();
  }

  onSubmit() {
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
    }, err => {
      MicroModal.show('modal-error');
    });
  }
}
