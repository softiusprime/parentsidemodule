import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Demo Export");
  }

}