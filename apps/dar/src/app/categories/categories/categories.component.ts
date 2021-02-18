import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@dar-lab-ng/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dar-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]>;

  searchTerm = '';

  constructor(
    
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.categories$ = this.httpClient
      .get<Category[]>(`/api/categories`)
      .pipe(
        map(categories => this.searchTerm ?
          categories.filter(c => c.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()))
            : categories
        )
      )
  }

  modelChanges() {
    console.log(this.searchTerm)
  }

  onSearchClick() {
    this.getData();
  }
  rowClickHandlerCat(category: Category) {
    console.log(category)
    this.router.navigate(['categories', category.id]);
  }
}
