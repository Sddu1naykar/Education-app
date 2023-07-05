import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  languages: string[] = ['Kannda', 'English', 'Hindi'];
  selectedLanguages: string[] = [];
  cities: string[] = ['City 1', 'City 2', 'City 3', 'City 4'];
  };


