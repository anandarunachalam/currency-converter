import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxInputComponent } from './cx-input.component';

describe('CxInputComponent', () => {
  let component: CxInputComponent;
  let fixture: ComponentFixture<CxInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
