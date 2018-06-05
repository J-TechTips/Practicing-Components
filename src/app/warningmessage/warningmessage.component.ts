import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warningmessage',
  template: `
  <h1 class="Warning">
  Warning!!!
  </h1>
  <hr>
  `,
  styleUrls: ['./warningmessage.component.css']
})
export class WarningMessageComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
