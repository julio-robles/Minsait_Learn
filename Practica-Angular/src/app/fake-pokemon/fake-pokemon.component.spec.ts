import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakePokemonComponent } from './fake-pokemon.component';

describe('FakePokemonComponent', () => {
  let component: FakePokemonComponent;
  let fixture: ComponentFixture<FakePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
