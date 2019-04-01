import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondbodyComponent } from './secondbody.component';

describe('SecondbodyComponent', () => {
  let component: SecondbodyComponent;
  let fixture: ComponentFixture<SecondbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
