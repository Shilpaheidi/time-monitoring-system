import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOrStudentComponent } from './staff-or-student.component';

describe('StaffOrStudentComponent', () => {
  let component: StaffOrStudentComponent;
  let fixture: ComponentFixture<StaffOrStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffOrStudentComponent]
    });
    fixture = TestBed.createComponent(StaffOrStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
