import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs';
import { BreedPicturesService } from '../services/breed-pictures.service';
import * as BreedPicturesActions from './breed-pictures.actions';

@Injectable({
  providedIn: 'root',
})
export class BreedPicturesEffects {
  constructor(
    private actions$: Actions,
    private readonly breedPicturesService: BreedPicturesService
  ) {}

  readonly getBooksList = createEffect(() =>
    this.actions$.pipe(
      ofType(BreedPicturesActions.getBreedPictures),
      mergeMap(({ breed }) => {
        return this.breedPicturesService.getBreedPictures(breed).pipe(
          map((data) =>
            BreedPicturesActions.getBreedPicturesSuccess({
              data: data?.message || [],
            })
          )
        );
      })
    )
  );
}
