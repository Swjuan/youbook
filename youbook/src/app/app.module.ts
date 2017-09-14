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
import { PaginationComponent } from './pagination/pagination.component';
import { PayComponent } from './pay/pay.component';
import { BuyComponent } from './pay/buy/buy.component';
import { ConfirmComponent } from './pay/confirm/confirm.component';
import { SuccessComponent } from './pay/success/success.component';
import { BuystepComponent } from './pay/buy/buystep/buystep.component';
import { ConfirmstepComponent } from './pay/confirm/confirmstep/confirmstep.component';
import { PaysecondComponent } from './paysecond/paysecond.component';
import { DiscoverComponent } from './discover/discover.component';
import { ActiveComponent } from './active/active.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { PublisharticleComponent } from './publisharticle/publisharticle.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BannerComponent,
    BooksComponent,
    TabComponent,
    ArticleComponent,
    BootomComponent,
    NavComponent,
    PaginationComponent,
    PayComponent,
    BuyComponent,
    ConfirmComponent,
    SuccessComponent,
    BuystepComponent,
    ConfirmstepComponent,
    PaysecondComponent,
    DiscoverComponent,
    ActiveComponent,
    LoginComponent,
    RegistComponent,
    PublisharticleComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
