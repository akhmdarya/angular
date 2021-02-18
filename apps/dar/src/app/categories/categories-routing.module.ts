import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryResolver } from './category.resolver';
import { CategoryComponent } from './category/category.component';


const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoriesComponent
  },
  {
    path: ':id',
    component: CategoryComponent,
    resolve: {
      category: CategoryResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {

}
