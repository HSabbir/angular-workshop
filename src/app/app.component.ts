import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workshop';
  name = 'Hello boss Sabbir';
  themecolor = "blue";
  arr = [
    'a','b','c','d'
  ];
  updateColor(){
    console.log('changed wala wala')
    this.themecolor = 'DARKORCHID';
  }
}
