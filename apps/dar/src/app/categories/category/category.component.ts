import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@dar-lab-ng/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'dar-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private http: HttpClient;
  category$: Observable<Category>;
  constructor(
   private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

      // this.category = data.category;
      this.category$ = this.route.params
      .pipe(
        switchMap(params => this.http
          .get<Category>(`/api/category/${params.id}`)),
        catchError(err => {
          console.error(err);
          return of(null);
        })
      );
    // })
  }

}
