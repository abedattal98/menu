import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'about-section-li',
  templateUrl: './about-section-li.component.html',
  styleUrls: ['./about-section-li.component.css']
})
export class AboutSectionLiComponent implements OnInit {
  @Input() name = "null"

  constructor() { 

  }

  ngOnInit(): void {
  }

}
