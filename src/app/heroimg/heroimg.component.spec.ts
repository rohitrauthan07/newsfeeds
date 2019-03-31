import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroimgComponent } from './heroimg.component';

describe('HeroimgComponent', () => {
  let component: HeroimgComponent;
  let fixture: ComponentFixture<HeroimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
