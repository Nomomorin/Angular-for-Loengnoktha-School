import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDataStudentComponent } from './insert-data-student.component';

describe('InsertDataStudentComponent', () => {
  let component: InsertDataStudentComponent;
  let fixture: ComponentFixture<InsertDataStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDataStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDataStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
