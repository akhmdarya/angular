import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
// import { ArticlesComponent } from "./pages/articles/articles.component";
import { GreetingComponent } from "./pages/greeting/greeting.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
// import { ArticlesComponent } from './articles/articles/articles.component';


const routes: Route[] = [
    {
        path: 'greetings',
        
        component: GreetingComponent,
    },
    {
        path: 'articles',
         loadChildren:()=> import('./articles/articles.module').then(m => m.ArticlesModule)
      ,
    },
    {
        path: 'categories',
        // loadChildren:()=>
        // import('../app/pages/categories/')
        component: CategoriesComponent,
    },
    {
        path: '**',
        redirectTo: '/'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}