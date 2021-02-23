import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryResolver } from './category.resolver';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';


const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoriesComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent,
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
