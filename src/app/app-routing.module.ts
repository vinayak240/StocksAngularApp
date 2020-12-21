import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { OnlyAuthenticatedUsersGuard } from './RouteGuards/only-authenticated-users.guard';
import { OnlyAdminUsersGuard } from './RouteGuards/only-admin-users.guard';
import { UserCompareComponent } from './components/user-compare/user-compare.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user-home',
    component: UserHomeComponent,
    canActivate: [OnlyAuthenticatedUsersGuard]
  },
  {
    path: 'user-home/compare',
    component: UserCompareComponent,
    canActivate: [OnlyAuthenticatedUsersGuard]
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    canActivate: [OnlyAdminUsersGuard]
  },
  // { path: '', redirectTo: '/register', pathMatch: 'full' },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
  { path: '', redirectTo: '/user-home', pathMatch: 'full' }
  // { path: '', redirectTo: '/admin-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
