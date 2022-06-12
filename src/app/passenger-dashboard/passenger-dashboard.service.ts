import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom, Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

//interface
import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable({
  providedIn: 'root',
})
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get<Passenger[]>(PASSENGER_API)
      .pipe(catchError(this.handleError));
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get<Passenger>(`${PASSENGER_API}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(() => new Error(error.message || 'Server error'));
  }

  // Promise alternative
  // getPassengers(): Promise<Passenger[]> {
  //   return firstValueFrom(this.http.get<Passenger[]>(PASSENGER_API));
  // }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      }),
    };
    return this.http.put<Passenger>(
      `${PASSENGER_API}/${passenger.id}`,
      passenger,
      httpOptions
    );
  }
  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
  }
}
