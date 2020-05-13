import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-download-assignments',
  templateUrl: './download-assignments.component.html',
  styleUrls: ['./download-assignments.component.css']
})
export class DownloadAssignmentsComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Download Assignment");
  }

}
