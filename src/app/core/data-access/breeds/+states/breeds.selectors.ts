import { createSelector } from '@ngrx/store';
import { breedsFeature } from './breeds.reducer';

const { selectBreedsState } = breedsFeature;

export const selectBreeds = createSelector(
  selectBreedsState,
  ({ data }) => data
);
