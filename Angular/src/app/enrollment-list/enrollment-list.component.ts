import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EnrollmentService } from '../enrollment.service';
import { EnrollmentModel } from '../enrollmentmodel';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit{
  enrollments!:Observable<EnrollmentModel[]>;
  constructor(private enrollmentService:EnrollmentService,private router:Router){}
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.enrollments=this.enrollmentService.getEnrollmentList();
  }

}
