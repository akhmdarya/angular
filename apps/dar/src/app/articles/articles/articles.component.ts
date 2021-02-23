import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '@dar-lab-ng/api-interfaces';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, mergeMap } from 'rxjs/operators';
import { CategoriesService } from '../../categories/categories.service';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'dar-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;

  searchTerm: FormControl;

  constructor(
    private articlesService: ArticlesService,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.searchTerm = new FormControl('');

    this.searchTerm
      .valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(term => {
        console.log(term)
        this.getData()
      })

    this.getData();
  }

  getData() {
    this.articles$ = this.articlesService.getArticles()
      .pipe(
        catchError(() => of(null)),
        mergeMap(articles => (
          !articles ? of([]) :
            this.categoriesService.getCategories()
              .pipe(
                map(categories => {
                  return articles.map(article => {
                    const category = categories.find(c => c.id === article.category_id);
                    return {
                      ...article,
                      category_title: category ? category.title : 'No category',
                    }
                  });
                }),
                catchError(() => of(articles))
              )
        )),
        map((articles: Article[]) => this.searchTerm ?
        articles.filter(a => a.title.toLowerCase().includes(this.searchTerm.value.toLowerCase())) : articles)
      )
  }

  rowClickHandler(article: Article) {
    console.log(article)
    this.router.navigate(['articles', article.id]);
  }
}
