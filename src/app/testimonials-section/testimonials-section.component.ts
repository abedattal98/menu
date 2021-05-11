import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements OnInit {
  testimonials =[]
  constructor() {
    fetch('https://obscure-retreat-73939.herokuapp.com/rawaa')
    .then(response => response.json())
    .then(json =>{
      this.testimonials =json;
    })
   }

  ngOnInit(): void {
  }

}
