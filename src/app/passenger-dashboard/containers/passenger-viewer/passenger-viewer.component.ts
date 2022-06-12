import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.css'],
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const result = this.route.paramMap.pipe(
      switchMap((data: Params) => {
        return this.passengerService.getPassenger(data['params'].id);
      })
    );
    result.subscribe((data: Passenger) => (this.passenger = data));
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
