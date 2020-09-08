import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadTalks,
  talksLoaded,
  ratingChanged,
  navigate,
  error,
} from '../actions/app.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { TalkRepoService } from '../services/talk-repo.service';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

@Injectable()
export class AppEffects {
  loadTalks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTalks),
      switchMap(() => this.talkRepo.getTalks()),
      map((talks) => talksLoaded({ talks }))
    )
  );

  ratingChanged$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ratingChanged),
      switchMap((action) => this.talkRepo.updateTalk({ ...action })),
      map(() => loadTalks())
    )
  );

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigate),
        map((action) => {
          this.router.navigateByUrl(action.route);
          return EMPTY;
        })
      ),
    { dispatch: false }
  );

  error$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(error),
        map((action) => {
          window.alert(action.message);
          return EMPTY;
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private talkRepo: TalkRepoService,
    private router: Router
  ) {}
}
