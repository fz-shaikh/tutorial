import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorloanComponent } from './corloan.component';

describe('CorloanComponent', () => {
  let component: CorloanComponent;
  let fixture: ComponentFixture<CorloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
