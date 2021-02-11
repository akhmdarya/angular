import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@dar-lab-ng/api-interfaces';

@Component({
  selector: 'dar-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  @Input()
  articles: Article[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
