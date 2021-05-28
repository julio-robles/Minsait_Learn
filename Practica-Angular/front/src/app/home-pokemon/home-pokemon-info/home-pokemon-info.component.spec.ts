import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePokemonInfoComponent } from './home-pokemon-info.component';

describe('HomePokemonInfoComponent', () => {
  let component: HomePokemonInfoComponent;
  let fixture: ComponentFixture<HomePokemonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePokemonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
