import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hw-link',
  templateUrl: './hw-link.component.html',
  styleUrls: ['./hw-link.component.scss']
})
export class HwLinkComponent implements OnInit {
  @Input() linkText;
  @Input() url;
  constructor() { }

  ngOnInit() {
  }

}
