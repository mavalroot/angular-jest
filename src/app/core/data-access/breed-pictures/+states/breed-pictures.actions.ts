import { createAction, props } from '@ngrx/store';

export const getBreedPictures = createAction(
  '[BreedPictures] Get all breed pictures',
  props<{ readonly breed: string }>()
);

export const getBreedPicturesSuccess = createAction(
  '[BreedPictures] Get all breed pictures Success',
  props<{ readonly data: string[] }>()
);

export const getBreedPicturesFailure = createAction(
  '[BreedPictures] Get all breed pictures Failure'
);
