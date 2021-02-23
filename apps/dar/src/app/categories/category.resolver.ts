import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Category } from '@dar-lab-ng/api-interfaces';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CategoriesService } from './categories.service';

@Injectable()
export class CategoryResolver implements Resolve<Category> {

  constructor(
    // private http: HttpClient
    private categoryService: CategoriesService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const categoryId = route.params.id;
    return this.categoryService.getCategory(categoryId)
      .pipe(catchError(() => {
        // TODO: Redirect to 404 Page
        return of(null);
      }));
  }
}


