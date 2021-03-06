import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, Category } from '@dar-lab-ng/api-interfaces';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CategoriesService } from '../../categories/categories.service';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'dar-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;
  categories$: Observable<Category[]>;

  form: FormGroup;
  id: string;

  constructor(
    private articleService: ArticlesService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.form = this.articleService.createArticleForm();

    this.article$ = this.route.data
      .pipe(
        map(data => data.article),
        tap((article: Article | null) => {
          if (article) {
            this.id = article.id;
            this.articleService.pathArticleForm(article, this.form)
          }
        })
      )
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
    if (!this.form.valid && this.id) {
      return;
    }

    this.articleService.updateArticle(this.id, this.form.value)
      .pipe(
        catchError(err => {
          console.error(err);
          return of(null);
        })
      )
      .subscribe(res => {
        console.log(res)
        if (res && res.id) {
          this.router.navigate(['/articles'])
        }
      })
  }

}
