import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasurerCardComponent } from './treasurer-card.component';

describe('TreasurerCardComponent', () => {
  let component: TreasurerCardComponent;
  let fixture: ComponentFixture<TreasurerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreasurerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasurerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
