import { Component, Input, OnInit } from '@angular/core';
import { IWhy } from '../app.component';

@Component({
  selector: 'why-us-section',
  templateUrl: './why-us-section.component.html',
  styleUrls: ['./why-us-section.component.css']
})
export class WhyUsSectionComponent implements OnInit {
@Input() why :IWhy


  constructor() { 

  }

  ngOnInit(): void {
  }

}
