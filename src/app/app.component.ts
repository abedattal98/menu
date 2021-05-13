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
  MenuItem:IMenuItem

  list =[]
  //menu =[]

  
  title = 'ang';
  constructor(){
  fetch('https://js-test-abed.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json =>{
    this.User =json.Sheet1[0];
    this.Why =json.Sheet;
    this.Menu=json.Sheet5;
    this.list =json.Sheet3;
    this.MenuItem =json.Sheet5;

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

}
export abstract class  IMenuItem{
  name:string;
  description:string
  category:string
  image:string
}