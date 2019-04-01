import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondbody2Component } from './secondbody2.component';

describe('Secondbody2Component', () => {
  let component: Secondbody2Component;
  let fixture: ComponentFixture<Secondbody2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secondbody2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondbody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
