import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '@dar-lab-ng/api-interfaces';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CategoriesService } from '../../categories/categories.service';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'dar-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  categories$: Observable<Category[]>;

  form: FormGroup;

  constructor(
    private articleService: ArticlesService,
    private categoriesService: CategoriesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.articleService.createArticleForm();
    this.categories$ = this.categoriesService.getCategories();
  }

  addTag() {
    this.articleService.addTag(this.form);
  }

  removeTag(index: number) {
    this.articleService.removeTag(this.form, index);
  }

  onSubmit() {
    console.log(this.form.value)
    if (!this.form.valid) {
      return;
    }

    this.articleService.createArticle(this.form.value)
      .pipe(
        catchError(err => {
          console.error(err);
          return of(null);
        })
      )
      .subscribe(res => {
        console.log(res)
        // if (res && res.id) {
          this.router.navigate(['/articles'])
        // }
      })
  }

}
