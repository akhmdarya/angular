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
  

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categories$ = this.httpClient
      .get<Article[]>(`/api/categories`)
 


      // .pipe(
      //   catchError(() => of(null)),
      //   mergeMap(articles => (
      //     !articles ? of(null) :
      //       this.httpClient.get<Category[]>(`/api/categories`)
      //         .pipe(
      //           map(categories => {
      //             return articles.map(article => {
      //               const category = categories.find(c => c.id === article.category_id);
      //               return {
      //                 ...article,
      //                 category_title: category ? category.title : 'No category',
      //               }
      //             });
      //           }),
      //           catchError(() => of(articles))
      //         )
      //   ))
      // )
  }
  rowClickHandlerCat(category: Category) {
    console.log(category)
    this.router.navigate(['categories', category.id]);
  }

}
