import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportRoutesComponent } from './transport-routes.component';

describe('TransportRoutesComponent', () => {
  let component: TransportRoutesComponent;
  let fixture: ComponentFixture<TransportRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
