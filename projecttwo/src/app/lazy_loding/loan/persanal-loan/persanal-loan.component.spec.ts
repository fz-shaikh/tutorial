import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersanalLoanComponent } from './persanal-loan.component';

describe('PersanalLoanComponent', () => {
  let component: PersanalLoanComponent;
  let fixture: ComponentFixture<PersanalLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersanalLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersanalLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
