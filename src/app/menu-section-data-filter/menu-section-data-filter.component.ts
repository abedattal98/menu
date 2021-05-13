import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-section-data-filter',
  templateUrl: './menu-section-data-filter.component.html',
  styleUrls: ['./menu-section-data-filter.component.css']
})
export class MenuSectionDataFilterComponent implements OnInit {
  @Input() name = ""
  @Input()  filter = ""
  

  constructor(){

  }
  ngOnInit(): void {
  }

}
