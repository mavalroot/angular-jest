import { createFeature, createReducer, on } from '@ngrx/store';

import * as BreedsAction from './breeds-actions';

interface BreedsState {
  readonly data: string[];
}

const initialState: BreedsState = {
  data: [],
};

export const breedsFeature = createFeature({
  name: 'breeds',
  reducer: createReducer(
    initialState,
    on(BreedsAction.getBreeds, (state) => ({
      ...state,
      data: [],
    })),
    on(BreedsAction.getBreedsSuccess, (state, { data }) => ({
      ...state,
      data: data || [],
    }))
  ),
});
