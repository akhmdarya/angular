import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '@dar-lab-ng/api-interfaces';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'dar-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]>;

  searchTerm: FormControl;

  constructor(
    
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchTerm = new FormControl('');

    // this.searchTerm
    // .valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(term => {
    //   console.log(term)
    //   this.getData()
    // })
 
    this.getData();
  }

  getData() {
    this.categories$ = this.httpClient
      .get<Category[]>(`/api/categories`)
      .pipe(
        map((categories: Category[]) => this.searchTerm ?
        categories.filter(a => a.title.toLowerCase().includes(this.searchTerm.value.toLowerCase())) : categories)
      )
  }

  modelChanges() {
    console.log(this.searchTerm)
  }

  onSearchClick() {
    this.getData();
  }
  rowClickHandlerCat(category: Category) {
    console.log(category)
    this.router.navigate(['categories', category.id]);
  }
}
