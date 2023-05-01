import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PicturesComponent } from '../../components/pictures/pictures.component';
import { AngularMaterialModule } from '@app/core/angular-material.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;

  const initialState = { data: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, PicturesComponent],
      providers: [provideMockStore({ initialState })],
      imports: [AngularMaterialModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
