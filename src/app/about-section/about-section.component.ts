import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../app.component';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  @Input() user:IUser;
  @Input() list = null

  constructor() { 

   }

  ngOnInit(): void {
  }

}
