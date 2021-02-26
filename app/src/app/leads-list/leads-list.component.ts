import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.css']
})
export class LeadsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typesOfCustomers: string[] = ['Lead 1', 'Lead 2', 'Lead 3', 'Lead 4', 'Lead 5'];

}
