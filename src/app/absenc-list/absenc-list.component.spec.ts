import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencListComponent } from './absenc-list.component';

describe('AbsencListComponent', () => {
  let component: AbsencListComponent;
  let fixture: ComponentFixture<AbsencListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbsencListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbsencListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
