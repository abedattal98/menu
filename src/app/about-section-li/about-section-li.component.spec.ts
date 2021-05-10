import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionLiComponent } from './about-section-li.component';

describe('AboutSectionLiComponent', () => {
  let component: AboutSectionLiComponent;
  let fixture: ComponentFixture<AboutSectionLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSectionLiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSectionLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
