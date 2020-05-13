import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.css']
})
export class ClassTimetableComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Class Timetable");
  }

}
