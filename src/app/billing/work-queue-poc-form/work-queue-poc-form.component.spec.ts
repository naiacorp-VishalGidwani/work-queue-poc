import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkQueuePocFormComponent } from './work-queue-poc-form.component';

describe('WorkQueuePocFormComponent', () => {
  let component: WorkQueuePocFormComponent;
  let fixture: ComponentFixture<WorkQueuePocFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkQueuePocFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkQueuePocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
