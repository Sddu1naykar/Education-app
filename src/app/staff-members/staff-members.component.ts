import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent implements OnInit {
 product :any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }
  // https://dummyjson.com/products
 
  getProducts() {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:0716604892').subscribe((data: any) => {
      console.log(data);
      this.product = data
    });
  }
}
