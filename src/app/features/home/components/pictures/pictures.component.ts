import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BreedPicturesSelectors } from '@app/core/data-access/breed-pictures';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent {
  pictures: string[] = [];
  paginatedPictures: string[] = [];
  length: number = 0;
  page: number = 0;
  size: number = 4;
  pageSize: number[] = [4, 8, 12, 24];

  constructor(private readonly store: Store) {
    this.store
      .select(BreedPicturesSelectors.selectBreedPictures)
      .subscribe((pictures) => {
        this.length = pictures.length;
        this.pictures = pictures;
        this.getPaginationData({
          pageIndex: this.page,
          pageSize: this.size,
        });
      });
  }

  public getPaginationData(options: {
    pageIndex: number;
    pageSize: number;
  }): void {
    const { pageIndex, pageSize } = options;
    const startingIndex = pageIndex * pageSize,
      endingIndex = startingIndex + pageSize;

    let index = 0;

    this.paginatedPictures = this.pictures.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }
}
