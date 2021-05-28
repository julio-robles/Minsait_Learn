import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFakePokemonsComponent } from './view-fake-pokemons.component';

describe('ViewFakePokemonsComponent', () => {
  let component: ViewFakePokemonsComponent;
  let fixture: ComponentFixture<ViewFakePokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFakePokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFakePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
