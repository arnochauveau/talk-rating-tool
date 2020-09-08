import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  login(username: string, password: string) {
    return username === 'admin' && password === 'admin';
  }
}
