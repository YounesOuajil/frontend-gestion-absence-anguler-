import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRoutingOutletComponent } from './my-routing-outlet.component';

describe('MyRoutingOutletComponent', () => {
  let component: MyRoutingOutletComponent;
  let fixture: ComponentFixture<MyRoutingOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyRoutingOutletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyRoutingOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
