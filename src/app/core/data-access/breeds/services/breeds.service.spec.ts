import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BreedsService } from './breeds.service';
import { Observable } from 'rxjs';

fdescribe('BreedsService', () => {
  let service: BreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBreeds', () => {
    const observable = service.getBreeds();

    expect(observable).toBeTruthy();
  })
});
