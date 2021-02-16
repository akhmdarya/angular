import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '@dar-lab-ng/api-interfaces';

@Component({
  selector: 'dar-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent  {

  @Input()
  categories: Category[] = [];
  


  @Output()
  rowClicked = new EventEmitter<Category>();

  rowClickHandlerCat(category: Category) {
    this.rowClicked.emit(category);
  }

}
