import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-transport-routes',
  templateUrl: './transport-routes.component.html',
  styleUrls: ['./transport-routes.component.css']
})
export class TransportRoutesComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Transport Routes");
  }

}
