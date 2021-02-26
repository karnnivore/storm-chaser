import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typesOfCustomers: string[] = ['Contact 1', 'Contact 2', 'Contact 3', 'Contact 4', 'Contact 5'];
}
