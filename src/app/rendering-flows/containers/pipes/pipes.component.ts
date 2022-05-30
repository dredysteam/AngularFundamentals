import { Component, OnInit } from '@angular/core';

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate?: number;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Ralph',
      checkedIn: true,
      checkedInDate: 1490742000000,
    },
    {
      id: 2,
      fullname: 'Laura',
      checkedIn: false,
    },
    {
      id: 3,
      fullname: 'Leonor',
      checkedIn: true,
      checkedInDate: 1491606000000,
    },
    {
      id: 4,
      fullname: 'Lorena',
      checkedIn: true,
      checkedInDate: 1488412800000,
    },
    {
      id: 5,
      fullname: 'Chris',
      checkedIn: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
