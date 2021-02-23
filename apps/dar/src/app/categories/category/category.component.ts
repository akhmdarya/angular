import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, Category } from '@dar-lab-ng/api-interfaces';
import { of } from 'rxjs';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError, tap, map } from 'rxjs/operators';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'dar-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  category$: Observable<Category>;
  categories$: Observable<Category[]>;

  form: FormGroup;
  id: string;

  constructor(
    private categoryService: CategoriesService,
  
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.form = this.categoryService.createCategoryForm();

    this.category$ = this.route.data
      .pipe(
        map(data => data.category),
        tap((category: Category | null) => {
          if (category) {
            this.id = category.id;
            this.categoryService.pathCategoryForm(category, this.form)
          }
        })
      )
   
  }



  onSubmit() {
    console.log(this.form.value)
    if (!this.form.valid && this.id) {
      return;
    }

    this.categoryService.updateCategory(this.id, this.form.value)
      .pipe(
        catchError(err => {
          console.error(err);
          return of(null);
        })
      )
      .subscribe(res => {
        console.log(res)
        if (res && res.id) {
          this.router.navigate(['/categories'])
        }
      })
  }

}