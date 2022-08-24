import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoContactFormComponent } from './exo-contact-form.component';

describe('ExoContactFormComponent', () => {
  let component: ExoContactFormComponent;
  let fixture: ComponentFixture<ExoContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
