import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuallyLoginComponent } from './manually-login.component';

describe('ManuallyLoginComponent', () => {
  let component: ManuallyLoginComponent;
  let fixture: ComponentFixture<ManuallyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuallyLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuallyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
