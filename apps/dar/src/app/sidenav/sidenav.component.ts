import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dar-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navItems = [
    {
      title: 'Greetings',
      link: '/greetings',
      isDisabled: false,
      isHidden: false,
    },
    {
      title: 'Articles',
      link: '/articles',
      isDisabled: false,
      isHidden: false,
    },
    {
      title: 'Disabled',
      link: '/disabled',
      isDisabled: true,
      isHidden: false,
    },
    {
      title: 'Test',
      link: '/test',
      isDisabled: false,
      isHidden: true,
    },
    {
      title: 'Categories',
      link: '/categories',
      isDisabled: false,
      isHidden: false,
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
