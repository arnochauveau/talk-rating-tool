import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loggedIn, addTalk } from '../actions/admin.actions';
import { UserService } from '../services/user.service';
import { mergeMap, switchMap, map } from 'rxjs/operators';
import { navigate, error } from 'src/app/actions/app.actions';
import { TalkRepoService } from 'src/app/services/talk-repo.service';

@Injectable()
export class AdminEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) => {
        const loginSuccess = this.userService.login(
          action.username,
          action.password
        );

        if (loginSuccess) {
          return [loggedIn(), navigate({ route: '/admin/manage' })];
        }

        return [error({ message: 'login failed' })];
      })
    )
  );

  addTalk$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTalk),
      switchMap((action) => this.talkRepo.addTalk(action.talk)),
      map(() => navigate({ route: '/overview' }))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private talkRepo: TalkRepoService
  ) {}
}
