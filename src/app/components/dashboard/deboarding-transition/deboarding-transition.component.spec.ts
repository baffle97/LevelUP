import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeboardingTransitionComponent } from './deboarding-transition.component';

describe('DeboardingTransitionComponent', () => {
  let component: DeboardingTransitionComponent;
  let fixture: ComponentFixture<DeboardingTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeboardingTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeboardingTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
