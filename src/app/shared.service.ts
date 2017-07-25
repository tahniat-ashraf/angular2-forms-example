import { Injectable } from '@angular/core';
import { Settings } from './settings/settings';

@Injectable()
export class SharedService {

  settings: Settings;


  constructor() { }

  getSettings() {
    if (this.settings) {
      console.log('SharedService :: getSettings :: ' + this.settings.country);
    }
    return this.settings;
  }

  setSettings(settings: Settings) {
    this.settings = settings;
  }

}
