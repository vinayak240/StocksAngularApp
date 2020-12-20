import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageSectorsComponent } from './admin-manage-sectors.component';

describe('AdminManageSectorsComponent', () => {
  let component: AdminManageSectorsComponent;
  let fixture: ComponentFixture<AdminManageSectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageSectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
