import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path: 'account', component: AccountPageComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginPageComponent },
  {path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
