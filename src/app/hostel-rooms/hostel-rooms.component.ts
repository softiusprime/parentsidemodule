import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-hostel-rooms',
  templateUrl: './hostel-rooms.component.html',
  styleUrls: ['./hostel-rooms.component.css']
})
export class HostelRoomsComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Hostel Rooms");
  }

}
