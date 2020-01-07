import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthControlComponent } from './user-auth-control.component';

describe('UserAuthControlComponent', () => {
  let component: UserAuthControlComponent;
  let fixture: ComponentFixture<UserAuthControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
