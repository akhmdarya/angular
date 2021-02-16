import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Route[] = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: ':id',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ArticlesRoutingModule {}
