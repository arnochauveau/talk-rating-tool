import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminState } from '../reducers/admin.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store
      .select(
        (state: { adminState: AdminState }) => state.adminState.isLoggedIn
      )
      .pipe(
        map((isLoggedIn) => {
          if (!isLoggedIn) {
            this.router.navigateByUrl('/admin/login');
          }
          return isLoggedIn;
        })
      );
  }
}
