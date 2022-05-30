import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css'],
})
export class TemplateRefComponent implements OnInit {
  name: string = 'someusername';
  constructor() {}

  ngOnInit(): void {}

  handleClick(value: string) {
    this.name = value;
  }
}
