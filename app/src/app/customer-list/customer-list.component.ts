import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typesOfCustomers: string[] = ['Customer 1', 'Customer 2', 'Customer 3', 'Customer 4', 'Customer 5'];
}
