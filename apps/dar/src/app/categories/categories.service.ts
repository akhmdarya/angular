import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Article, Category } from '@dar-lab-ng/api-interfaces';

@Injectable({providedIn: 'root'})
export class CategoriesService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  getCategories() {
    return this.httpClient
      .get<Category[]>(`/api/categories`)
  }

  createCategoryForm() {
    const form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    
 
    });

    return form;
  }

  pathCategoryForm(category: Category, form: FormGroup) {
    form.patchValue(category);
  
  }




  getCategory(id: string) {
    return this.httpClient
      .get<Article>(`/api/category/${id}`)
  }


  createCategory(data: Partial<Category>) {
    return this.httpClient
      .post<Category>(`/api/categories`, data);
  }

  updateCategory(id: string, data: Partial<Category>) {
    return this.httpClient
      .put<Category>(`/api/category/${id}`, data);
  }

  deleteCategories(id: string) {
    return this.httpClient.delete(`/api/category/${id}`);
  }


}
