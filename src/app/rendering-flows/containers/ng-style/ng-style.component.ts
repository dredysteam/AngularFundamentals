import { Component, OnInit } from '@angular/core';

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Ralph',
      checkedIn: true,
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
    },
    {
      id: 4,
      fullname: 'Lorena',
      checkedIn: true,
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
