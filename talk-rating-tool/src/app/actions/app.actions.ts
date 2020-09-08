import { createAction, props } from '@ngrx/store';
import { Talk } from '../models/talk.interface';

export const loadTalks = createAction('[overview container] load talks');
export const talksLoaded = createAction(
  '[Talks API] talks loaded',
  props<{ talks: Talk[] }>()
);
export const ratingChanged = createAction(
  '[overview] talk rating changed',
  props<{ id: number; rating: number }>()
);

export const navigate = createAction(
  '[effects]: navigate',
  props<{ route: string }>()
);

export const error = createAction(
  '[effects] error',
  props<{ message: string }>()
);
