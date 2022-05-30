import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  title: string;
  logo: string = 'src/img/logo.svg';
  name: string = 'Edy';
  constructor() {
    this.title = 'Property-binding!';
  }

  ngOnInit(): void {}
}
