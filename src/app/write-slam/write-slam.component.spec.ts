import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteSlamComponent } from './write-slam.component';

describe('WriteSlamComponent', () => {
  let component: WriteSlamComponent;
  let fixture: ComponentFixture<WriteSlamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteSlamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteSlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
