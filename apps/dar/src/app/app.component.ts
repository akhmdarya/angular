import { Component, OnInit } from '@angular/core';
import { Message } from '@dar-lab-ng/api-interfaces';

@Component({
  selector: 'dar-lab-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  projectName = '';
  greetingsText = 'Welcome to ';

  constructor() {}

  ngOnInit(): void {
    console.log('AppComponent inited');
    this.projectName = 'DarLab';
  }

  sayHello() {
    this.greetingsText = 'Hello, ';
  }
}
