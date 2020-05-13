import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Apply Leave");
  }

}
