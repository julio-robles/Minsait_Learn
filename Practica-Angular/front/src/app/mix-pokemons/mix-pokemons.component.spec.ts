import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixPokemonsComponent } from './mix-pokemons.component';

describe('MixPokemonsComponent', () => {
  let component: MixPokemonsComponent;
  let fixture: ComponentFixture<MixPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
