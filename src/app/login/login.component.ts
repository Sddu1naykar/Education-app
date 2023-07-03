import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,private userDataService: UserDataService) {

      this.registrationForm = new FormGroup({
        // Your form controls here
      

      });

   }
 
   title = 'LOGIN-FORM APPLICATION';
   registrationForm: FormGroup;
   loggedIn = false;

  submitForm() {
    if (this.registrationForm.valid) {
      // Perform actions with the form data
      alert("Login successful...");
      this.registrationForm.reset(); // Reset the form fields
      this.loggedIn = true; // Set the loggedIn flag to true

    // Retrieve user data from the service
    const userData = this.userDataService.getUserData();
    // localStorage.clear();
    console.log('User Data:', userData);
    
    this.router.navigate(['/dashbord',userData])

    }
  }


}
