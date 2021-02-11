import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '@dar-lab-ng/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'dar-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.articles$ = this.httpClient
      .get<Article[]>(`/api/articles?limit=5&sort=id:DESC`)
  }

}
