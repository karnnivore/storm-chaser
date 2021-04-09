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
  typesOfCustomers = [['585-402-5543', 'Rochester, NY 14607, USA', '14 Anson Pl'], ['585-241-5533', 'Rochester, NY 14604, USA', '328 E Main St.'], ['585-432-2423', 'Rochester, NY 14620, USA', '390 South Ave.'], ['585-978-6876', 'Rochester, NY 14605, USA', '114 University Ave.'], ['585-421-3323', 'Rochester, NY 14605, USA', '24 Upper Falls']];
}
