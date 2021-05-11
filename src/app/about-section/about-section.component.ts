import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  @Input() name = null;
  @Input() role = null;
  @Input() image = null;
  @Input() icon = null;
  @Input() list = null


  Users = [];
  
  
  constructor() { 
    // fetch('https://js-test-abed.herokuapp.com/rawaa')
    // .then(response => response.json())
    // .then(json =>{
    //   this.Users =json.Sheet1;
    //   this.name=json.Sheet1[0].name
    //   this.role=json.Sheet1[0].role
    //   this.icon=json.Sheet1[0].icon
    //   this.image=json.Sheet1[0].image
    // })
    // fetch('https://obscure-retreat-73939.herokuapp.com/rawaa')
    // .then(response => response.json())
    // .then(json =>{
    //   this.list =json;
    // })
   }

  ngOnInit(): void {
  }

}
