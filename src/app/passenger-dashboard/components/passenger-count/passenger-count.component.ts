import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.css'],
})
export class PassengerCountComponent implements OnInit {
  @Input()
  items: Passenger[] = [];

  constructor() {}

  ngOnInit(): void {}

  checkedInCount() {
    // if (!this.items) return;
    return this.items.filter((passenger: Passenger) => {
      return passenger.checkedIn;
    }).length;
  }
}
