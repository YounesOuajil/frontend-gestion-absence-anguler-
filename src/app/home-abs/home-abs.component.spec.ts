import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAbsComponent } from './home-abs.component';

describe('HomeAbsComponent', () => {
  let component: HomeAbsComponent;
  let fixture: ComponentFixture<HomeAbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
