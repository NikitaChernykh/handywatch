import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hw-button',
  templateUrl: './hw-button.component.html',
  styleUrls: ['./hw-button.component.scss']
})
export class HwButtonComponent implements OnInit {
  @Input() buttonText;
  @Input() buttonType = 'dark';
  @Input() link = 'https://gallery.fitbit.com/developer/12152438-2164-45e6-8de8-e408fb54f9a6';
  constructor() { }

  ngOnInit() {

  }

  setButtonType() {

  }

  onClick() {
    document.location.href = this.link;
  }

}
