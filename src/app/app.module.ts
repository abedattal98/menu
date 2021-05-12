import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { SpecialSectionComponent } from './special-section/special-section.component';
import { EventSectionComponent } from './event-section/event-section.component';
import { BookTableComponent } from './book-table/book-table.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { ChefSectionComponent } from './chef-section/chef-section.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutSectionLiComponent } from './about-section-li/about-section-li.component';
import { MenuSectionDataFilterComponent } from './menu-section-data-filter/menu-section-data-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    WhyUsSectionComponent,
    MenuSectionComponent,
    SpecialSectionComponent,
    EventSectionComponent,
    BookTableComponent,
    TestimonialsSectionComponent,
    GallerySectionComponent,
    ChefSectionComponent,
    ContactComponent,
    FooterComponent,
    AboutSectionLiComponent,
    MenuSectionDataFilterComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
