import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSectionComponent } from './chef-section.component';

describe('ChefSectionComponent', () => {
  let component: ChefSectionComponent;
  let fixture: ComponentFixture<ChefSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
