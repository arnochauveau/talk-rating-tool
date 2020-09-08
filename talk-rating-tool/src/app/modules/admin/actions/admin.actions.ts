import { createAction, props } from '@ngrx/store';
import { Talk } from 'src/app/models/talk.interface';

export const login = createAction(
  '[Login container] login',
  props<{ username: string; password: string }>()
);

export const loggedIn = createAction('[Login service] logged in');

export const addTalk = createAction(
  '[manage container] add talk',
  props<{ talk: Partial<Talk> }>()
);
