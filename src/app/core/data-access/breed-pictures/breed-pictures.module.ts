import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { breedPicturesFeature } from './+states/breed-pictures.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BreedPicturesEffects } from './+states/breed-pictures.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(breedPicturesFeature),
    EffectsModule.forFeature([BreedPicturesEffects]),
  ],
})
export class BreedPicturesModule {}
