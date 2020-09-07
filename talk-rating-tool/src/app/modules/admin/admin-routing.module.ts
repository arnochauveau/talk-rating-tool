import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainer } from './containers/login/login.container';
import { TalkManagementContainer } from './containers/talk-management/talk-management.container';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: 'login', component: LoginContainer },
  {
    path: 'manage',
    component: TalkManagementContainer,
    canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
