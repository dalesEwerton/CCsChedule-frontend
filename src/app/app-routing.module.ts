import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthguardGuard} from './guards/authguard.guard';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createaccount', component: CreateAccountComponent},
  {path: 'profile', canActivate: [AuthguardGuard], component: ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
