import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { TalkManagementContainer } from './containers/talk-management/talk-management.container';
import { LoginContainer } from './containers/login/login.container';
import { StoreModule } from '@ngrx/store';
import * as fromAdminReducer from './reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './effects/admin.effects';

@NgModule({
  declarations: [TalkManagementContainer, LoginContainer],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('adminState', fromAdminReducer.reducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class AdminModule {}
