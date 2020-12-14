import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipCoordCardComponent } from './mentorship-coord-card.component';

describe('MentorshipCoordCardComponent', () => {
  let component: MentorshipCoordCardComponent;
  let fixture: ComponentFixture<MentorshipCoordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorshipCoordCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorshipCoordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
