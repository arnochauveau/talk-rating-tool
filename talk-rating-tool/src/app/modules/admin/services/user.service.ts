import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    this.loggedIn = username === 'admin' && password === 'admin';

    if (this.loggedIn) {
      this.router.navigateByUrl('/admin/manage');
    }

    return this.loggedIn;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
