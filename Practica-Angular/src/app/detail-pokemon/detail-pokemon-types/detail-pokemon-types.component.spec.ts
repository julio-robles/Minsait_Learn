import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemonTypesComponent } from './detail-pokemon-types.component';

describe('DetailPokemonTypesComponent', () => {
  let component: DetailPokemonTypesComponent;
  let fixture: ComponentFixture<DetailPokemonTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPokemonTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemonTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
