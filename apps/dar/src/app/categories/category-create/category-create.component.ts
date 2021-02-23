import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '@dar-lab-ng/api-interfaces';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CategoriesService } from '../../categories/categories.service';


@Component({
  selector: 'dar-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  categories$: Observable<Category[]>;

  form: FormGroup;

  constructor(
    
    private categoriesService: CategoriesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.categoriesService.createCategoryForm();
    
  }

 

  onSubmit() {
    console.log(this.form.value)
    if (!this.form.valid) {
      return;
    }

    this.categoriesService.createCategory(this.form.value)
      .pipe(
        catchError(err => {
          console.error(err);
          return of(null);
        })
      )
      .subscribe(res => {
        console.log(res)
        // if (res && res.id) {
          this.router.navigate(['/categories'])
        // }
      })
  }

}
