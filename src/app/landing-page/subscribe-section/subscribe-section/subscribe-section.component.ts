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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-mailerlite-apikey': 'e6911a74fac1c23c5ac3903fb2fd33f3',
      'Access-Control-Allow-Origin': '*'
    })
  };


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

  onSubmit() {
    const body = { "email": this.emailForm.value.email }
    this.httpClient
      .post("https://api.mailerlite.com/api/v2/subscribers", body, this.httpOptions).subscribe(data => { },
        error => { console.log(JSON.stringify(error)) }
      );

  }
}
