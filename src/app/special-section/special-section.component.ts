import { Component, Input, OnInit } from '@angular/core';
import { IWhy } from '../app.component';

@Component({
  selector: 'special-section',
  templateUrl: './special-section.component.html',
  styleUrls: ['./special-section.component.css']
})
export class SpecialSectionComponent implements OnInit {
  @Input() why :IWhy

  constructor() { }

  ngOnInit(): void {
  }

}
