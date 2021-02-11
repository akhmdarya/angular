import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dar-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

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
