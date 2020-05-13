import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIssuedComponent } from './book-issued.component';

describe('BookIssuedComponent', () => {
  let component: BookIssuedComponent;
  let fixture: ComponentFixture<BookIssuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookIssuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
