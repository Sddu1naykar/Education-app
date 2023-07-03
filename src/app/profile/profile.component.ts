import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 20,
    fatherName: '',
    address: '',
    mobileNumber: '',
    panCard: ''
  };

  public fatherName: string="";
  public address: string="";
  public mobileNumber: string="";
  public panCard: string="";
}
