import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AuthentificationComponent} from './authentification/authentification.component';
import {StartupComponent} from './startup/startup.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {Page404Component} from './page404/page404.component';

const routes: Routes = [
  {path: '', component: AuthentificationComponent},
  {path: 'index', component: IndexComponent},
  {path: 'startups', component: StartupComponent},
  {path: 'consultants', component: ConsultantComponent},
  {path: '404', component: Page404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
