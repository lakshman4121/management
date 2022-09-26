import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentdetailsComponent } from './allstudentdetails.component';

describe('AllstudentdetailsComponent', () => {
  let component: AllstudentdetailsComponent;
  let fixture: ComponentFixture<AllstudentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstudentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
