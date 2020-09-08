import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { login } from '../../actions/admin.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss'],
})
export class LoginContainer {
  username = '';
  password = '';

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(
      login({ username: this.username, password: this.password })
    );
  }
}
