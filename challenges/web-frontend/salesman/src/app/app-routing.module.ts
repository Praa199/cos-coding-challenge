import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
  {path: 'home',
  component: HomeComponent},
  {path: 'login',
  component: LoginComponent},
  {path: 'overview',
  component: OverviewComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
