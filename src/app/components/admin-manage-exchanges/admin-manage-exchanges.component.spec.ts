import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageExchangesComponent } from './admin-manage-exchanges.component';

describe('AdminManageExchangesComponent', () => {
  let component: AdminManageExchangesComponent;
  let fixture: ComponentFixture<AdminManageExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
