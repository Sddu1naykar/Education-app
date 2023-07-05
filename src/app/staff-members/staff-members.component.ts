import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent  {
  staff: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.fetchStudents();
  }

  fetchStudents() {
    this.http.get<any>('/assets/dummy-staff.json').subscribe(
      (data: any) => {
        this.staff = data.users;
        console.log(this.staff);
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

}
