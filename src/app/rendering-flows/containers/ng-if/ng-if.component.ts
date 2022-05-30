import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  name: string;
  constructor() {
    this.name = '';
  }

  ngOnInit(): void {}

  handleChange(event: any) {
    this.name = event.target.value;
  }
}
