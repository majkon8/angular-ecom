import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPurchasesComponent } from './account-purchases.component';

describe('AccountPurchasesComponent', () => {
  let component: AccountPurchasesComponent;
  let fixture: ComponentFixture<AccountPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
