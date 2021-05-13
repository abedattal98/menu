import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from '../app.component';

@Component({
  selector: 'menu-section-item',
  templateUrl: './menu-section-item.component.html',
  styleUrls: ['./menu-section-item.component.css']
})
export class MenuSectionItemComponent implements OnInit {
  @Input() name =""
  @Input() image =""
  @Input() category =""
  @Input() description =""
  @Input() price =""



  @Input() menuItem : IMenuItem
  constructor() { }

  ngOnInit(): void {
  }

}
