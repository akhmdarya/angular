import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleResolver } from './article.resolver';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Route[] = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: 'create',
    component: ArticleCreateComponent,
  },
  {
    path: ':id',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver
    }
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
