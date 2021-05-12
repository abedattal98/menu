import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectionDataFilterComponent } from './menu-section-data-filter.component';

describe('MenuSectionDataFilterComponent', () => {
  let component: MenuSectionDataFilterComponent;
  let fixture: ComponentFixture<MenuSectionDataFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSectionDataFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSectionDataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
