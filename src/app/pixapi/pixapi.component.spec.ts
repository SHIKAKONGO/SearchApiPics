import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixapiComponent } from './pixapi.component';

describe('PixapiComponent', () => {
  let component: PixapiComponent;
  let fixture: ComponentFixture<PixapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
