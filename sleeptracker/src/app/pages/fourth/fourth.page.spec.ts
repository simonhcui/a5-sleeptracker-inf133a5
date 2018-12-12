import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPage } from './fourth.page';

describe('FourthPage', () => {
  let component: FourthPage;
  let fixture: ComponentFixture<FourthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
