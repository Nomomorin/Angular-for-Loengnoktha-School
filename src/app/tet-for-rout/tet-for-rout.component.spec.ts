import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetForRoutComponent } from './tet-for-rout.component';

describe('TetForRoutComponent', () => {
  let component: TetForRoutComponent;
  let fixture: ComponentFixture<TetForRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetForRoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetForRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
