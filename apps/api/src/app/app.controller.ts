import { Controller, Get, HttpService, Param } from '@nestjs/common';

import { Message } from '@dar-lab-ng/api-interfaces';

import { AppService } from './app.service';
import { map } from 'rxjs/operators'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private httpClient: HttpService,
  ) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('/articles')
  getArticles() {
    return this.httpClient
      .get(`https://media-api.dar-dev.zone/api/articles?limit=5&sort=id:DESC`)
      .pipe(
        map(res => res.data)
      )
  }

  @Get('/articles/:id')
  getArticle(@Param('id') id) {
    return this.httpClient
      .get(`https://media-api.dar-dev.zone/api/articles/${id}`)
      .pipe(
        map(res => res.data)
      )
  }

  @Get('/categories')
  getCategories() {
    return this.httpClient
      .get(`https://media-api.dar-dev.zone/api/categories`)
      .pipe(
        map(res => res.data)
      )
  }

  @Get('/category/:id')
  getCategory(@Param('id') id) {
    return this.httpClient
      .get(`https://media-api.dar-dev.zone/api/categories/${id}`)
      .pipe(
        map(res => res.data)
      )
  }
}
