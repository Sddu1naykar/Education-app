import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  registrationForm: FormGroup;

  submitForm() {
    if (this.registrationForm.valid) {
      // Perform actions with the form data
      alert("Login successful...");
      this.registrationForm.reset();
      this.router.navigateByUrl('/dashbord');
    }
  }
}
