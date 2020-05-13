import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-teacher-review',
  templateUrl: './teacher-review.component.html',
  styleUrls: ['./teacher-review.component.css']
})
export class TeacherReviewComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Teacher Review");
  }


}
