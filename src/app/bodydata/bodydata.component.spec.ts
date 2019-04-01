import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydataComponent } from './bodydata.component';

describe('BodydataComponent', () => {
  let component: BodydataComponent;
  let fixture: ComponentFixture<BodydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
