import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessloanComponent } from './buisnessloan.component';

describe('BuisnessloanComponent', () => {
  let component: BuisnessloanComponent;
  let fixture: ComponentFixture<BuisnessloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuisnessloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuisnessloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
