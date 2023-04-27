import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  options!: Observable<string[]>;

  constructor(private readonly store: Store) {
    this.store.dispatch(BreedsActions.getBreeds());
  }

  ngOnInit(): void {
    this.options = this.store.select(BreedsSelectors.selectBreeds);
    this.filteredOptions = this.options;

    this.breed.valueChanges.subscribe((value) => {
      console.log(value);
      this.filteredOptions = this._filter(value || '');
    });
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
