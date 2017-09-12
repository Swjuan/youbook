import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BannerComponent } from './index/banner/banner.component';
import { BooksComponent } from './index/books/books.component';
import { TabComponent } from './index/tab/tab.component';
import { ArticleComponent } from './index/article/article.component';
import { BootomComponent } from './index/bootom/bootom.component';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BannerComponent,
    BooksComponent,
    TabComponent,
    ArticleComponent,
    BootomComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
