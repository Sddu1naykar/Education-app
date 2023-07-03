import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viestudent',
  templateUrl: './viestudent.component.html',
  styleUrls: ['./viestudent.component.css']
})
export class ViestudentComponent implements OnInit {
  student: any;

  constructor(private route: ActivatedRoute) {}

 
  ngOnInit() {
    this.student = history.state.student;
  }
}
