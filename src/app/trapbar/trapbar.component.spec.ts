import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapbarComponent } from './trapbar.component';

describe('TrapbarComponent', () => {
  let component: TrapbarComponent;
  let fixture: ComponentFixture<TrapbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrapbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrapbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
