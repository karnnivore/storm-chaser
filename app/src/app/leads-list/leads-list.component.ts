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
  typesOfCustomers: string[] = ['Grace Ogley', 'Dale Hayes', 'Blanche Hancock', 'Alaric Dunn', 'Jacqueline Wade'];

}
