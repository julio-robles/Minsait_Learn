import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWebInfoComponent } from './home-web-info.component';

describe('HomeWebInfoComponent', () => {
  let component: HomeWebInfoComponent;
  let fixture: ComponentFixture<HomeWebInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWebInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWebInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
