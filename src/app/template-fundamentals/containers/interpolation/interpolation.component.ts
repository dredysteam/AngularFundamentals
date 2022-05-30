import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  // title: string;
  numberOne: number = 1;
  numberTwo: number = 2;

  isHappy: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
