import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, Category } from '@dar-lab-ng/api-interfaces';
import { of } from 'rxjs';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dar-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private http: HttpClient;
  category: Category;
  category$: Observable<Category>;
  form: FormGroup;

  constructor(
   private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required] )
     
    });


    this.route.data.subscribe(data => {
      this.category = data.category;
    })

    this.category$ = this.route.params
    .pipe(
      switchMap(params => this.http
        .get<Category>(`/api/category/${params.id}`)),
      catchError(err => {
        console.error(err);
        return of(null);
      })
    ),
    tap((category: Category | null) => {
      if (category) {
        this.form.patchValue(category);
        
      }
    });
  }

}
