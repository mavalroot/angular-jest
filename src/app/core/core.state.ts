// ngrx
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface RootState {
  readonly router: RouterReducerState;
}

export const reducers: ActionReducerMap<RootState> = {
  router: routerReducer
};
