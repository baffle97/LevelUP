import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleKtComponent } from './schedule-kt.component';

describe('ScheduleKtComponent', () => {
  let component: ScheduleKtComponent;
  let fixture: ComponentFixture<ScheduleKtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleKtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleKtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
