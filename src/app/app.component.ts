import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  User:IUser
  why:IWhy
  list =[]
  listC =[]

  
  title = 'ang';
  constructor(){
  fetch('https://js-test-abed.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json =>{
    this.User =json.Sheet1[0];
   
  })
  fetch('https://js-test-abed.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json =>{
    this.why =json.Sheet2;
  })
  fetch('https://obscure-retreat-73939.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json =>{
    this.list =json;
  })
  // fetch('https://restcountries.eu/rest/v2/all')
  // .then(response => response.json())
  // .then(json =>{
  //   this.listC =json;
  // })
}
}


export abstract class IUser{
  name:string;
  image:string;
  role:string;
  icon:string;
}
export abstract class IWhy{
  name:string;
  image:string;
  role:string;
  icon:string;
}