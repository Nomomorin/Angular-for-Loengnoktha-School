import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDrugComponent } from './stock-drug.component';

describe('StockDrugComponent', () => {
  let component: StockDrugComponent;
  let fixture: ComponentFixture<StockDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDrugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
