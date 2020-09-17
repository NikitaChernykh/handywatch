import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hw-button',
  templateUrl: './hw-button.component.html',
  styleUrls: ['./hw-button.component.scss']
})
export class HwButtonComponent implements OnInit {
  @Input() buttonText;
  @Input() buttonType = 'dark';
  constructor() { }

  ngOnInit() {

  }

  setButtonType() {

  }

}
