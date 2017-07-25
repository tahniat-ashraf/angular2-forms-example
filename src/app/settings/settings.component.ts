import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Settings } from './settings';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  complexForm: FormGroup;
  settings: Settings;

  constructor(private fb: FormBuilder, private sharedService: SharedService, private router: Router) { }

  ngOnInit() {

    this.settings = this.sharedService.getSettings();


    this.complexForm = this.fb.group({
      'email': (this.settings) ? this.settings.email : '',
      'android': (this.settings) ? this.settings.android : '',
      'angular': (this.settings) ? this.settings.angular : '',
      'java': (this.settings) ? this.settings.java : '',
      'kotlin': (this.settings) ? this.settings.kotlin : '',
      'ionic': (this.settings) ? this.settings.ionic : '',
      'color': (this.settings) ? this.settings.color : '',//selecting blue,red or green would work
      'country': (this.settings) ? this.settings.country : ''
    });



  }


  submitForm(settings: Settings): void {
    console.log('Clicked submitForm :: SettingsComponent');
    console.log(settings);
    this.sharedService.setSettings(settings);
    this.router.navigateByUrl('/home');

  }


}
