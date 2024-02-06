import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracComponent } from './prac.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PractService } from '../P_service/pract.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('PracComponent', () => {
  let component: PracComponent;
  let fixture: ComponentFixture<PracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [PractService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
