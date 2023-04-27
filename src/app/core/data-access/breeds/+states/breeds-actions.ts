import { createAction, props } from '@ngrx/store';

export const getBreeds = createAction('[Breeds] Get all breeds');

export const getBreedsSuccess = createAction(
  '[Breeds] Get all breeds Success',
  props<{ readonly data: string[] }>()
);

export const getBreedsFailure = createAction('[Breeds] Get all breeds Failure');
