import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseKtComponent } from './reverse-kt.component';

describe('ReverseKtComponent', () => {
  let component: ReverseKtComponent;
  let fixture: ComponentFixture<ReverseKtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseKtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseKtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
