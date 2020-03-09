import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxSelectComponent } from './cx-select.component';

describe('CxSelectComponent', () => {
  let component: CxSelectComponent;
  let fixture: ComponentFixture<CxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
