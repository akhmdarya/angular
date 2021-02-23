import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Category } from '@dar-lab-ng/api-interfaces';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CategoryResolver implements Resolve<Category> {

  constructor(
    private http: HttpClient
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const categoryId = route.params.id;
    return this.http.get<Category>(`/api/category/${categoryId}`)
      .pipe(catchError(() => {
        // TODO: Redirect to 404 Page
        return of(null);
      }));
  }
}



// @Injectable()
// export class ArticleResolver implements Resolve<Article> {

//   constructor(
//     private articleService: ArticlesService
//   ) {}

//   resolve(route: ActivatedRouteSnapshot) {
//     const articleId = route.params.id;
//     return this.articleService.getArticle(articleId)
//         .pipe(catchError(() => {
//           // TODO: Redirect to 404 Page
//           return of(null);
//         }));
//   }
// }
