import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleComponent } from './article/article.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesListComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
