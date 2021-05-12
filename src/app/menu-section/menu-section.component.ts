import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
  @Input() menu = null

  constructor() { }

  ngOnInit(): void {
    console.log(this.menu);
    
  }

}
