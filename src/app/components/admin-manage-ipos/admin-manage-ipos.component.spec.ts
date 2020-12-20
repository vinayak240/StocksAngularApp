import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageIposComponent } from './admin-manage-ipos.component';

describe('AdminManageIposComponent', () => {
  let component: AdminManageIposComponent;
  let fixture: ComponentFixture<AdminManageIposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageIposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageIposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
