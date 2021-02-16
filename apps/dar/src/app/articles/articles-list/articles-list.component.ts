import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '@dar-lab-ng/api-interfaces';

@Component({
  selector: 'dar-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {

  @Input()
  articles: Article[] = [];

  @Output()
  rowClicked = new EventEmitter<Article>();

  rowClickHandler(article: Article) {
    this.rowClicked.emit(article);
  }
}
