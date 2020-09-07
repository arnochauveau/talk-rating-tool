import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TalkManagementContainer } from './containers/talk-management/talk-management.container';
import { LoginContainer } from './containers/login/login.container';


@NgModule({
  declarations: [TalkManagementContainer, LoginContainer],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
