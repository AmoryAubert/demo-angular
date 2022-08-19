import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDialogueComponent } from './demo-dialogue.component';

describe('DemoDialogueComponent', () => {
  let component: DemoDialogueComponent;
  let fixture: ComponentFixture<DemoDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
