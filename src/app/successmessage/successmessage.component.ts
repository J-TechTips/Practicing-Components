import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[successmessage]',
  templateUrl: './successmessage.component.html',
  styles: [`.Success { color:greenyellow; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; } `]
})
export class SuccessMessageComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
