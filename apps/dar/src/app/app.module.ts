import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { AppRoutingModule } from './app-routing.module';
// import { ArticlesComponent } from './pages/articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
// import { ArticlesListComponent } from './components/articles-list/articles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    GreetingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
