import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincompoComponent } from './logincompo.component';

describe('LogincompoComponent', () => {
  let component: LogincompoComponent;
  let fixture: ComponentFixture<LogincompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
