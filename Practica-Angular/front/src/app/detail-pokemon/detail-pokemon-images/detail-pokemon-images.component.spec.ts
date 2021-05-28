import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemonImagesComponent } from './detail-pokemon-images.component';

describe('DetailPokemonImagesComponent', () => {
  let component: DetailPokemonImagesComponent;
  let fixture: ComponentFixture<DetailPokemonImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPokemonImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemonImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
