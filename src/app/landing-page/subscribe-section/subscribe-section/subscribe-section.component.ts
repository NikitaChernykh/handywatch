import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  }

  onSubmit() {
    const data = {
      method: 'POST',
      body: JSON.stringify({ email: this.emailForm.value.email }),
      headers: { 'Content-Type': 'application/json' }
    }
    this.httpClient.post('https://handywatch-service.herokuapp.com/subscribe', data.body, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://handy.watch' } }).subscribe(res => {
      alert('thank you');
    }, err => {
      alert('error');
    });

    alert('thank you');
  }
}
