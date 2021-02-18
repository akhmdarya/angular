import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryResolver } from './category.resolver';
import { CategoryComponent } from './category/category.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
 
    CategoryComponent
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
