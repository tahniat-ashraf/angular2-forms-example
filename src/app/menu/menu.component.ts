import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  home;
  settings;


  constructor() { }

  ngOnInit() {
    console.log('window.location.pathname : ' + window.location.pathname);
    this.home = '/home';
    this.settings = '/settings';
  }

}
