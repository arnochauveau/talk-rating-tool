import { createReducer, on } from '@ngrx/store';
import { loggedIn } from '../actions/admin.actions';

export interface AdminState {
  isLoggedIn: boolean;
}

const intialState: AdminState = {
  isLoggedIn: false,
};

const adminReducer = createReducer(
  intialState,
  on(loggedIn, (state) => ({ ...state, isLoggedIn: true }))
);

export function reducer(state, action) {
  return adminReducer(state, action);
}
