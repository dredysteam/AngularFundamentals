import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularFundamentals';

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true,
    },
    {
      link: '/oops',
      name: '404',
      exact: false,
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: false,
    },
  ];
}
