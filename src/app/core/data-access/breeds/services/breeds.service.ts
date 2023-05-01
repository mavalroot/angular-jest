import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BreedsResponse } from '../models/breeds-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  constructor(private readonly httpClient: HttpClient) {}

  getBreeds(): Observable<BreedsResponse> {
    return this.httpClient.get<BreedsResponse>('/api/breeds/list/all');
  }
}
