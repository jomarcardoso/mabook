import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent },
  {path: '', component: HomePageComponent },
  // {path: '**', loadChildren: () => import('./not-found-page/').then(m => m.AppModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}