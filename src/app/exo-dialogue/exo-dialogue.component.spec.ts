import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoDialogueComponent } from './exo-dialogue.component';

describe('ExoDialogueComponent', () => {
  let component: ExoDialogueComponent;
  let fixture: ComponentFixture<ExoDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
