import { Controller, Get, HttpService } from '@nestjs/common';

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
  // @Get('/categories') 
  // getArticles() {
  //   return this.httpClient
  //     .get(`https://media-api.dar-dev.zone/api/articles?limit=5&sort=id:DESC`)
  //     .pipe(
  //       map(res => res.data)
  //     )
  // }
}
