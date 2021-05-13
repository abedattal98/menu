import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  User:IUser
  Why:IWhy
  Menu:IMenu
  list =[]
  //menu =[]

  
  title = 'ang';
  constructor(){
  fetch('https://js-test-abed.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json =>{
    this.User =json.Sheet1[0];
    this.Why =json.Sheet4;
    this.Menu=json.Sheet2;
    this.list =json.Sheet3;
  })
  
  fetch('https://obscure-retreat-73939.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json =>{
  //  this.Menu=json;
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
export abstract class  IMenu{
  name:string;
  filter:string
constructor(){
 // this.filter=".filter-"+this.name;
}
}