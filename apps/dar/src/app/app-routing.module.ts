import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { GreetingComponent } from "./pages/greeting/greeting.component";



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
        loadChildren:()=> import('./categories/categories.module').then(m => m.CategoriesModule,
            )
        ,

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