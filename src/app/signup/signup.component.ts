// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserDataService } from '../user-data.service';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   firstName: string = '';
//   lastName: string = '';
//   email: string = '';
//   password: string = '';

//   constructor(private router: Router, private userDataService: UserDataService) { }

//   navigateToLogin() {
//     const userData = [{
//       firstName: this.firstName,
//       lastName: this.lastName,
//       email: this.email,
//       password: this.password
//     }];

//     this.userDataService.saveUserData(userData);
//     console.log(userData);
//     this.router.navigate(['/login']);
//   }
// }
