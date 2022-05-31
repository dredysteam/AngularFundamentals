import { Component, OnInit } from '@angular/core';
//interface
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css'],
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor() {}

  ngOnInit(): void {
    this.passengers = [
      {
        id: 1,
        fullname: 'Ralph',
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullname: 'Laura',
        checkedIn: false,
        checkedInDate: null,
        children: [
          { name: 'Peter', age: 2 },
          { name: 'Jhon', age: 1 },
        ],
      },
      {
        id: 3,
        fullname: 'Leonor',
        checkedIn: true,
        checkedInDate: 1491606000000,
        children: null,
      },
      {
        id: 4,
        fullname: 'Lorena',
        checkedIn: true,
        checkedInDate: 1488412800000,
        children: [
          { name: 'Alex', age: 2 },
          { name: 'Judith', age: 3 },
        ],
      },
      {
        id: 5,
        fullname: 'Chris',
        checkedIn: false,
        checkedInDate: null,
        children: null,
      },
    ];
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}
