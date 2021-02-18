import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article, Category } from '@dar-lab-ng/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'dar-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.categories$ = this.httpClient
      .get<Category[]>(`/api/?`)
  }

}
