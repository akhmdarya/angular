import { Component, Input } from '@angular/core';
import { Category } from '@dar-lab-ng/api-interfaces';

@Component({
  selector: 'dar-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  @Input()
  categories: Category[] = [];

}
