import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemonHeadComponent } from './detail-pokemon-head.component';

describe('DetailPokemonHeadComponent', () => {
  let component: DetailPokemonHeadComponent;
  let fixture: ComponentFixture<DetailPokemonHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPokemonHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemonHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
