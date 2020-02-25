import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettempComponent } from './gettemp.component';

describe('GettempComponent', () => {
  let component: GettempComponent;
  let fixture: ComponentFixture<GettempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
