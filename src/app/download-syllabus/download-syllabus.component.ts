import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-download-syllabus',
  templateUrl: './download-syllabus.component.html',
  styleUrls: ['./download-syllabus.component.css']
})
export class DownloadSyllabusComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Download Syllabus");
  }

}
