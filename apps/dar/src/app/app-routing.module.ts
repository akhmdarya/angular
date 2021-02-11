import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ArticlesComponent } from "./pages/articles/articles.component";
import { GreetingComponent } from "./pages/greeting/greeting.component";

const routes: Route[] = [
    {
        path: 'greetings',
        component: GreetingComponent,
    },
    {
        path: 'articles',
        component: ArticlesComponent,
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