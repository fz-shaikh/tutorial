import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredidCradComponent } from './credid-crad.component';

describe('CredidCradComponent', () => {
  let component: CredidCradComponent;
  let fixture: ComponentFixture<CredidCradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredidCradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredidCradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
