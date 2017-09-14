import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DiscoverComponent } from './discover/discover.component';
import { ActiveComponent } from './active/active.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { PublisharticleComponent } from './publisharticle/publisharticle.component';
const routes: Routes = [


  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'active',
    component: ActiveComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  {
    path: 'publisharticle',
    component: PublisharticleComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: IndexComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
