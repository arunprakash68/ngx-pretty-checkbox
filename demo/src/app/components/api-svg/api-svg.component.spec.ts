import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSvgComponent } from './api-svg.component';

describe('ApiSvgComponent', () => {
  let component: ApiSvgComponent;
  let fixture: ComponentFixture<ApiSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
