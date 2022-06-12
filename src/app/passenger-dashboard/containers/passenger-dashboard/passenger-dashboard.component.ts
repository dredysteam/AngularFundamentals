import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//interface
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css'],
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(
    private passengerDashboardService: PassengerDashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passengerDashboardService
      .getPassengers()
      .subscribe((data: Passenger[]) => {
        this.passengers = data;
      });

    // Promise alternative
    // this.passengerDashboardService.getPassengers().then((data: Passenger[]) => {
    //   this.passengers = data;
    // });
  }

  handleRemove(event: Passenger) {
    this.passengerDashboardService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }

  handleEdit(event: Passenger) {
    this.passengerDashboardService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]);
  }
}
