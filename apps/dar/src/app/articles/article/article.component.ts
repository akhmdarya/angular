import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article, Category } from '@dar-lab-ng/api-interfaces';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'dar-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;
  categories$: Observable<Category[]>;

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)] ),
      annotation: new FormControl('', Validators.required),
      is_published: new FormControl(false),
      category_id: new FormControl(''),
      tags: new FormArray([])
    });

    this.article$ = this.route.params
      .pipe(
        switchMap(params => this.http
          .get<Article>(`/api/articles/${params.id}`)),
        catchError(err => {
          console.error(err);
          return of(null);
        }),
        tap((article: Article | null) => {
          if (article) {
            this.form.patchValue(article);
            article.tags.forEach(tag => {
              const tagsArray = this.form.controls.tags as FormArray;
              const tagControl = new FormGroup({
                name: new FormControl(tag.name)
              });
              tagsArray.push(tagControl);
            })
          }
        })
      );

    this.categories$ = this.http
      .get<Category[]>(`/api/categories`)
  }

  addTag() {
    const tagsArray = this.form.controls.tags as FormArray;
    const tagControl = new FormGroup({
      name: new FormControl('')
    });
    tagsArray.push(tagControl);
  }

  onSubmit() {
    console.log(this.form.valid)
    if (!this.form.valid) {
      return;
    }
    // console.log(this.form.value);
  }

}
