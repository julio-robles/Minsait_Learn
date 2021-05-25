import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePokemonListComponent } from './home-pokemon-list.component';

describe('HomePokemonListComponent', () => {
  let component: HomePokemonListComponent;
  let fixture: ComponentFixture<HomePokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePokemonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
