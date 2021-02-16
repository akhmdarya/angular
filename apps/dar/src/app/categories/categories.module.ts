import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesRoutingModule } from './categories-routing.module';
// import { CategoryResolver } from './category.resolver';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriesRoutingModule,
  ]
})
export class CategoriesModule { }