import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOfficersListComponent } from './company-officers-list.component';

describe('CompanyOfficersListComponent', () => {
  let component: CompanyOfficersListComponent;
  let fixture: ComponentFixture<CompanyOfficersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyOfficersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyOfficersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
