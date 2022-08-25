import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoParamsComponent } from './demo-params.component';

describe('DemoParamsComponent', () => {
  let component: DemoParamsComponent;
  let fixture: ComponentFixture<DemoParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
