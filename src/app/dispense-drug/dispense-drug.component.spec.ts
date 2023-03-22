import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseDrugComponent } from './dispense-drug.component';

describe('DispenseDrugComponent', () => {
  let component: DispenseDrugComponent;
  let fixture: ComponentFixture<DispenseDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenseDrugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispenseDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
