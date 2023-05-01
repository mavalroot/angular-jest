import { createFeature, createReducer, on } from '@ngrx/store';

import * as BreedPicturesAction from './breed-pictures.actions';

interface BreedPicturesState {
  readonly data: string[];
}

const initialState: BreedPicturesState = {
  data: [],
};

export const breedPicturesFeature = createFeature({
  name: 'breedPictures',
  reducer: createReducer(
    initialState,
    on(BreedPicturesAction.getBreedPictures, (state) => ({
      ...state,
      data: [],
    })),
    on(BreedPicturesAction.getBreedPicturesSuccess, (state, { data }) => ({
      ...state,
      data: data || [],
    })),
  ),
});
