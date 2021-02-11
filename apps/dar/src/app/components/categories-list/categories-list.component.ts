import { Component, Input, OnInit } from '@angular/core';
import { Category } from '@dar-lab-ng/api-interfaces';

@Component({
  selector: 'dar-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input()
  categories: Category[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
