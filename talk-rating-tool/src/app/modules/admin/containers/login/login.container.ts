import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss'],
})
export class LoginContainer {
  username = '';
  password = '';

  constructor(private userService: UserService) {}

  onSubmit() {
    const LoginSucceeded = this.userService.login(this.username, this.password);

    if (!LoginSucceeded) {
      window.alert('wrong username or password');
    }
  }
}
