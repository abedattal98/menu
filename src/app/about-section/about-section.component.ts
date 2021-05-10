import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  @Input() name = null;

  Users = [];
  constructor() {
    fetch('https://js-test-abed.herokuapp.com/rawaa')
    .then(response => response.json())
    .then(json =>{
      this.Users =json.Sheet1;
    })
   }

  ngOnInit(): void {
  }

}
