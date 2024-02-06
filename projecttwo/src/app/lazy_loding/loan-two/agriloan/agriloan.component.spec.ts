import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriloanComponent } from './agriloan.component';

describe('AgriloanComponent', () => {
  let component: AgriloanComponent;
  let fixture: ComponentFixture<AgriloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
