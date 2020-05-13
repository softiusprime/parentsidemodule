import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-other-download',
  templateUrl: './other-download.component.html',
  styleUrls: ['./other-download.component.css']
})
export class OtherDownloadComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Other Downloads");
  }


}
