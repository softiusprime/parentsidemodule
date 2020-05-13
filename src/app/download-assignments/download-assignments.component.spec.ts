import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAssignmentsComponent } from './download-assignments.component';

describe('DownloadAssignmentsComponent', () => {
  let component: DownloadAssignmentsComponent;
  let fixture: ComponentFixture<DownloadAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
