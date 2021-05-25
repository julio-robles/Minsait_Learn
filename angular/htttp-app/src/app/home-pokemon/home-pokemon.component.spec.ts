import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePokemonComponent } from './home-pokemon.component';

describe('HomePokemonComponent', () => {
  let component: HomePokemonComponent;
  let fixture: ComponentFixture<HomePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
