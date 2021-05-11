import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'why-us-section',
  templateUrl: './why-us-section.component.html',
  styleUrls: ['./why-us-section.component.css']
})
export class WhyUsSectionComponent implements OnInit {
why=[]
index = 100;

  constructor() { 
    fetch('https://js-test-abed.herokuapp.com/rawaa')
    .then(response => response.json())
    .then(json =>{
      this.why =json.Sheet2;
    })
  }

  ngOnInit(): void {
  }

}
