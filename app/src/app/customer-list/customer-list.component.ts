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
  typesOfCustomers: string[] = ['George Smith', 'Anker Letterman', 'Sharon Dunn', 'Clay Mullins', 'Shirley Haynes'];
}
