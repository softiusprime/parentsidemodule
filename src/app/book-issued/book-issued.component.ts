import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-book-issued',
  templateUrl: './book-issued.component.html',
  styleUrls: ['./book-issued.component.css']
})
export class BookIssuedComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Book Issued");
  }

}
