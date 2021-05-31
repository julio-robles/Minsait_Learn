import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFakePokemonComponent } from './detail-fake-pokemon.component';

describe('DetailFakePokemonComponent', () => {
  let component: DetailFakePokemonComponent;
  let fixture: ComponentFixture<DetailFakePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFakePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFakePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
