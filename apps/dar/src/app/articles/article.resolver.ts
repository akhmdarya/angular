import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Article } from '@dar-lab-ng/api-interfaces';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ArticlesService } from './articles.service';

@Injectable()
export class ArticleResolver implements Resolve<Article> {

  constructor(
    private articleService: ArticlesService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const articleId = route.params.id;
    return this.articleService.getArticle(articleId)
        .pipe(catchError(() => {
          // TODO: Redirect to 404 Page
          return of(null);
        }));
  }
}
