import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageCompaniesComponent } from './admin-manage-companies.component';

describe('AdminManageCompaniesComponent', () => {
  let component: AdminManageCompaniesComponent;
  let fixture: ComponentFixture<AdminManageCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
