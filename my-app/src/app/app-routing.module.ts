/**
 * Created by lzhan on 2017/9/3.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [


  {
    path: 'index/:val',
    component: IndexComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
