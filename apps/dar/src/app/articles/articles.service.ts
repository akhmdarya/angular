import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Article } from '@dar-lab-ng/api-interfaces';


@Injectable({providedIn: 'root'})
export class ArticlesService {

  constructor(
    private httpClient: HttpClient
  ) {}

  createArticleForm() {
    const form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)] ),
      annotation: new FormControl('', Validators.required),
      is_published: new FormControl(false),
      category_id: new FormControl(''),
      tags: new FormArray([])
    });

    return form;
  }

  pathArticleForm(article: Article, form: FormGroup) {
    form.patchValue(article);
    article.tags.forEach(tag => {
      const tagsArray = form.controls.tags as FormArray;
      const tagControl = new FormGroup({
        name: new FormControl(tag.name)
      });
      tagsArray.push(tagControl);
    })
  }

  addTag(form: FormGroup) {
    const tagsArray = form.controls.tags as FormArray;
    const tagControl = new FormGroup({
      name: new FormControl('')
    });
    tagsArray.push(tagControl);
  }

  removeTag(form: FormGroup, index: number) {
    const tagsArray = form.get('tags') as FormArray;
    tagsArray.removeAt(index);
  }

  getArticle(id: string) {
    return this.httpClient
      .get<Article>(`/api/articles/${id}`)
  }

  getArticles(limit: number = 5, sort: string = 'id:DESC') {
    return this.httpClient
      .get<Article[]>(`/api/articles`, {
        params: {
          limit: `${limit}`,
          sort
        }
      })
  }

  createArticle(data: Partial<Article>) {
    return this.httpClient
      .post<Article>(`/api/articles`, data);
  }

  updateArticle(id: string, data: Partial<Article>) {
    return this.httpClient
      .put<Article>(`/api/articles/${id}`, data);
  }

  deleteArticle(id: string) {
    return this.httpClient.delete(`/api/articles/${id}`);
  }
}
