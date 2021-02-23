import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleComponent } from './article/article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleResolver } from './article.resolver';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleCreateComponent } from './article-create/article-create.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesListComponent,
    ArticleComponent,
    ArticleFormComponent,
    ArticleCreateComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ArticleResolver
  ]
})
export class ArticlesModule { }
