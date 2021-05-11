import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Users=[]
  list =[]
  listC =[]
  name=''
  role=''
  icon=''
  image=''
  
  title = 'ang';
  constructor(){
  fetch('https://js-test-abed.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json =>{
    this.Users =json.Sheet1;
    this.name=json.Sheet1[0].name
    this.role=json.Sheet1[0].role
    this.icon=json.Sheet1[0].icon
    this.image=json.Sheet1[0].image
  })
  fetch('https://obscure-retreat-73939.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json =>{
    this.list =json;
  })
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json =>{
    this.listC =json;
  })
}
}
