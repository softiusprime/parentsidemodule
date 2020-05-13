import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDownloadComponent } from './other-download.component';

describe('OtherDownloadComponent', () => {
  let component: OtherDownloadComponent;
  let fixture: ComponentFixture<OtherDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
