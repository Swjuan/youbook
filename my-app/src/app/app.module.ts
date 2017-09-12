//import倒入一个类
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
//装饰器对象
@NgModule({
  //
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //启动
  bootstrap: [AppComponent]
})
export class AppModule { }
