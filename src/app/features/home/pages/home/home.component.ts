import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BreedPicturesActions,
  BreedPicturesSelectors,
} from '@app/core/data-access/breed-pictures';
import { BreedsActions, BreedsSelectors } from '@app/core/data-access/breeds';
import { Store } from '@ngrx/store';
import { Observable, map, of, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  breed = new FormControl('');
  filteredOptions!: Observable<string[]>;
  options: Observable<string[]>;
  pictures: Observable<string[]> | null;

  constructor(private readonly store: Store) {
    this.options = this.store.select(BreedsSelectors.selectBreeds);
    this.pictures = this.store.select(
      BreedPicturesSelectors.selectBreedPictures
    );
  }

  ngOnInit(): void {
    this.store.dispatch(BreedsActions.getBreeds());

    this.filteredOptions = this.options;

    this.breed.valueChanges.subscribe((value) => {
      this.filteredOptions = this._filter(value || '');
    });
  }

  public selectBreed(value: any): void {
    this.store.dispatch(
      BreedPicturesActions.getBreedPictures({ breed: value })
    );
  }

  private _filter(value: string): Observable<string[]> {
    if (this.options) {
      const filterValue = value.toLowerCase();

      return this.options.pipe(
        map((list) =>
          list.filter((option) => option.toLowerCase().includes(filterValue))
        )
      );
    }
    return of([]);
  }
}
