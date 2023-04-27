import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs';
import { BreedsService } from '../services/breeds.service';
import * as BreedsActions from './breeds-actions';
import { getPropertiesAsArray } from '@app/core/utils';

@Injectable({
  providedIn: 'root',
})
export class BreedsEffects {
  constructor(
    private actions$: Actions,
    private readonly breedsService: BreedsService
  ) {}

  readonly getBooksList = createEffect(() =>
    this.actions$.pipe(
      ofType(BreedsActions.getBreeds),
      mergeMap(() => {
        return this.breedsService
          .getBreeds()
          .pipe(
            map((data) =>
              BreedsActions.getBreedsSuccess({
                data: getPropertiesAsArray(data?.message) || [],
              })
            )
          );
      })
    )
  );
}
