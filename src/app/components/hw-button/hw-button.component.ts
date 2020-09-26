import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hw-button',
  templateUrl: './hw-button.component.html',
  styleUrls: ['./hw-button.component.scss']
})
export class HwButtonComponent implements OnInit {
  @Input() buttonText;
  @Input() buttonColorType = 'dark-light';
  @Input() type = 'button';
  @Input() disabled = false;

  @Output() clickAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  triggerEvent() {
    this.clickAction.emit();
  }

}
