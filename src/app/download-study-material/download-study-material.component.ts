import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-download-study-material',
  templateUrl: './download-study-material.component.html',
  styleUrls: ['./download-study-material.component.css']
})
export class DownloadStudyMaterialComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Download Study Material");
  }

}
