import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryResolver } from './category.resolver';
import { CategoryComponent } from './category/category.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryFormComponent } from './category-form/category-form.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
 
    CategoryComponent,
 
    CategoryCreateComponent,
 
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
  ],
  providers: [
    CategoryResolver
  ]
})
export class CategoriesModule { }
