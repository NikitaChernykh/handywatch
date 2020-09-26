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
      'access-control-allow-credentials': 'true',
      'access-control-allow-headers': 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since,X-MailerLite-Account,X-MailerLite-Token',
      'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'origin': 'https://handy.watch',
      'content-type': 'application/json',
    })
  };


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

  onSubmit() {
    const body = { "email": this.emailForm.value.email }
    this.httpClient
      .post("https://api.mailerlite.com/api/v2/subscribers", body, this.httpOptions).subscribe(data => {

        alert("Thank you! You should recive an email with the promo code shortly.");

      },
        error => { console.log(JSON.stringify(error)) }
      );

  }
}
