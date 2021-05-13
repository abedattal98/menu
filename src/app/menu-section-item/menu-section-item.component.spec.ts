import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectionItemComponent } from './menu-section-item.component';

describe('MenuSectionItemComponent', () => {
  let component: MenuSectionItemComponent;
  let fixture: ComponentFixture<MenuSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSectionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
