import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadStudyMaterialComponent } from './download-study-material.component';

describe('DownloadStudyMaterialComponent', () => {
  let component: DownloadStudyMaterialComponent;
  let fixture: ComponentFixture<DownloadStudyMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadStudyMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadStudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
