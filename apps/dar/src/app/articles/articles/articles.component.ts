import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article, Category } from '@dar-lab-ng/api-interfaces';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'dar-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articles$ = this.httpClient
      .get<Article[]>(`/api/articles?limit=5&sort=id:DESC`)
      .pipe(
        catchError(() => of(null)),
        mergeMap(articles => (
          !articles ? of(null) :
            this.httpClient.get<Category[]>(`/api/categories`)
              .pipe(
                map(categories => {
                  return articles.map(article => {
                    const category = categories.find(c => c.id === article.category_id);
                    return {
                      ...article,
                      category_title: category ? category.title : 'No category',
                    }
                  });
                }),
                catchError(() => of(articles))
              )
        ))
      )
  }

  rowClickHandler(article: Article) {
    console.log(article)
    this.router.navigate(['articles', article.id]);
  }
}
