import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import {HomeComponent} from './components/home/home.component';
import {ScheduleComponent} from './components/schedule/schedule.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createaccount', component: CreateAccountComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
