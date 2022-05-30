import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  name: string = 'Edilberto Rios';
  constructor() {}

  ngOnInit(): void {}

  handleBlur(event: any) {
    this.name = event.target.value;
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'Button clicked!!';
  }
}
