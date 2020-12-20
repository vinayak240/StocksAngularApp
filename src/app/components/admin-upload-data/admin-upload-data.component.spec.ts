import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadDataComponent } from './admin-upload-data.component';

describe('AdminUploadDataComponent', () => {
  let component: AdminUploadDataComponent;
  let fixture: ComponentFixture<AdminUploadDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUploadDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
