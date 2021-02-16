import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article, Category } from '@dar-lab-ng/api-interfaces';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'dar-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]>; 
   articles$: Observable<Article[]>;
  

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categories$ = this.httpClient
      .get<Article[]>(`/api/categories`)
  
     


  }
  rowClickHandlerCat(category: Category) {
    console.log(category)
    this.router.navigate(['categories', category.id]);
  }

}
