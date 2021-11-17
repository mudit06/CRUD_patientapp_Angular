import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPatientComponent } from './fetch-patient.component';

describe('FetchPatientComponent', () => {
  let component: FetchPatientComponent;
  let fixture: ComponentFixture<FetchPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
