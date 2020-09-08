import { Talk } from 'src/app/models/talk.interface';
import { createReducer, on } from '@ngrx/store';
import { talksLoaded } from 'src/app/actions/app.actions';

export interface State {
  talks: Talk[];
}

const initialState: State = {
  talks: [],
};

const appReducer = createReducer(
  initialState,
  on(talksLoaded, (state, { talks }) => ({ ...state, talks }))
);

export function reducer(state, action) {
  return appReducer(state, action);
}
