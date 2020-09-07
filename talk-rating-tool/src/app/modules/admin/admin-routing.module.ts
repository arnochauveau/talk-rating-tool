import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainer } from './containers/login/login.container';
import { TalkManagementContainer } from './containers/talk-management/talk-management.container';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      { path: 'login', component: LoginContainer },
      { path: 'manage', component: TalkManagementContainer },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
