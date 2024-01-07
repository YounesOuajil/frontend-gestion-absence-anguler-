import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsCompComponent } from './groups-comp.component';

describe('GroupsCompComponent', () => {
  let component: GroupsCompComponent;
  let fixture: ComponentFixture<GroupsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
