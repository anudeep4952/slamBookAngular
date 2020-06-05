import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSlamsComponent } from './view-slams.component';

describe('ViewSlamsComponent', () => {
  let component: ViewSlamsComponent;
  let fixture: ComponentFixture<ViewSlamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSlamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSlamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
