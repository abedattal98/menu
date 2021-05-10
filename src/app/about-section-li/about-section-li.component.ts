import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-section-li',
  templateUrl: './about-section-li.component.html',
  styleUrls: ['./about-section-li.component.css']
})
export class AboutSectionLiComponent implements OnInit {
  Countries= [];

  constructor() { 
    fetch('https://obscure-retreat-73939.herokuapp.com/rawaa')
    .then(response => response.json())
    .then(json =>{
      this.Countries =json;
    })
  }

  ngOnInit(): void {
  }

}
