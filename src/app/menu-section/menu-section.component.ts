import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from '../app.component';

@Component({
  selector: 'menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
  @Input() menu = null
  @Input() menuItem :IMenuItem 

  constructor() { }

  ngOnInit(): void {
  }

}
