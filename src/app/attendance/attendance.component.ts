import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  students: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.fetchStudents();
  }

  fetchStudents() {
    this.http.get<any>('/assets/dummy-data.json').subscribe(
      (data: any) => {
        this.students = data.users;
        console.log(this.students);
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  navigateToAnotherPage(student: any) {
    this.router.navigate(['/viewstudent'], { state: { student } });
  }
  
  
}
