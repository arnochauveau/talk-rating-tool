import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { TalkManagementContainer } from './containers/talk-management/talk-management.container';
import { LoginContainer } from './containers/login/login.container';

@NgModule({
  declarations: [TalkManagementContainer, LoginContainer],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
