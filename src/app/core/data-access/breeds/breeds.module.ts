import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { breedsFeature } from './+states/breeds.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BreedsEffects } from './+states/breeds.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(breedsFeature),
    EffectsModule.forFeature([BreedsEffects]),
  ],
})
export class BreedsModule {}
