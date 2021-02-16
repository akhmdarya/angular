import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@dar-lab-ng/api-interfaces';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'dar-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.article$ = this.route.params
      .pipe(
        switchMap(params => this.http
          .get<Article>(`/api/articles/${params.id}`)),
        catchError(err => {
          console.error(err);
          return of(null);
        })
      );
  }

}
