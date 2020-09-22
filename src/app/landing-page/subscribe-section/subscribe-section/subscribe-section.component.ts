import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  ngOnInit() {

  }

  onSubmit() {
    const allInfo = `My email is ${this.emailForm.value.email}`;
    alert(allInfo);
  }

}
