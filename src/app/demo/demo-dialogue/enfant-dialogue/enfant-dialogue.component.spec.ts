import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantDialogueComponent } from './enfant-dialogue.component';

describe('EnfantDialogueComponent', () => {
  let component: EnfantDialogueComponent;
  let fixture: ComponentFixture<EnfantDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
