import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BreedPicturesResponse } from '../models/breed-pictures-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreedPicturesService {
  constructor(private readonly httpClient: HttpClient) {}

  getBreedPictures(breed: string): Observable<BreedPicturesResponse> {
    return this.httpClient.get<BreedPicturesResponse>(`https://dog.ceo/api/breed/${breed}/images`);
  }
}
