import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSyllabusComponent } from './download-syllabus.component';

describe('DownloadSyllabusComponent', () => {
  let component: DownloadSyllabusComponent;
  let fixture: ComponentFixture<DownloadSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
