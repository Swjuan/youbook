import {PayComponent} from "./pay.component"
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfirmComponentonfi} 
const routes: Routes = [


  {
    path: 'confirm',
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
    path: 'pay',
    component: PayComponent
  },
  // {
  //   path: 'confirm',
  //   component: ConfirmComponent
  // },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
