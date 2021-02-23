import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@dar-lab-ng/api-interfaces';

@Injectable({providedIn: 'root'})
export class CategoriesService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  getCategories() {
    return this.httpClient
      .get<Category[]>(`/api/categories`)
  }
}
