import { createSelector } from '@ngrx/store';
import { breedPicturesFeature } from './breed-pictures.reducer';

const { selectBreedPicturesState } = breedPicturesFeature;

export const selectBreedPictures = createSelector(
  selectBreedPicturesState,
  ({ data }) => data
);
