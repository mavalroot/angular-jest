import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BreedPicturesSelectors } from '@app/core/data-access/breed-pictures';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent {
  pictures$: Observable<string[]>;
  paginatedPictures$!: Observable<string[]>;
  page: number = 0;
  size: number = 4;
  pageSize: number[] = [4, 8, 12, 24];

  constructor(private readonly store: Store) {
    this.pictures$ = this.store.select(
      BreedPicturesSelectors.selectBreedPictures
    );

    this.getPaginationData({
      pageIndex: this.page,
      pageSize: this.size,
    });
  }

  public getPaginationData(options: {
    pageIndex: number;
    pageSize: number;
  }): void {
    const { pageIndex, pageSize } = options;
    const startingIndex = pageIndex * pageSize,
      endingIndex = startingIndex + pageSize;

    console.log('getPaginationData');

    let index = 0;

    this.paginatedPictures$ = this.pictures$.pipe(
      map((list) =>
        list.filter(() => {
          index++;
          return index > startingIndex && index <= endingIndex ? true : false;
        })
      )
    );
  }
}
