import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPaginationComponent } from './main-pagination.component';

describe('MainPaginationComponent', () => {
  let component: MainPaginationComponent;
  let fixture: ComponentFixture<MainPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
