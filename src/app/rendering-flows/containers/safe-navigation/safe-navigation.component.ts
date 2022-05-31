import { Component, OnInit } from '@angular/core';

interface Child {
  name: string;
  age: number;
}
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate: number | null;
  children: Child[] | null;
}

@Component({
  selector: 'app-safe-navigation',
  templateUrl: './safe-navigation.component.html',
  styleUrls: ['./safe-navigation.component.css'],
})
export class SafeNavigationComponent implements OnInit {
  passengers: Passenger[] = [
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

  constructor() {}

  ngOnInit(): void {}
}
