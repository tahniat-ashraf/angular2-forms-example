import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Settings } from '../settings/settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  settings: Settings;
  technology: string[] = [];


  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    console.log('Home component ngOnInit ...');
    this.settings = this.sharedService.getSettings();
    if (this.settings) {
      console.log(this.settings);
      if (this.settings.android) {
        this.technology.push('Android');
      }
      if (this.settings.java) {
        this.technology.push('Java');
      } if (this.settings.kotlin) {
        this.technology.push('Kotlin');
      } if (this.settings.angular) {
        this.technology.push('Angular');
      } if (this.settings.ionic) {
        this.technology.push('Ionic');
      }

    }
  }

}
