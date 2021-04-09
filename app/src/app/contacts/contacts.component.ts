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
  typesOfCustomers = [['647-402-5543', 'John Smith', '356 Markham St.'], ['647-241-5533', 'Alex Gogh', '76 George St.'], ['416-432-2423', 'Wynne Law', '42 Carlton St.'], ['647-978-6876', 'Jasper Reynolds', '4221 Yonge St.'], ['647-421-3323', 'Ivory Osborne', '4000 Kennedy Rd.']];
}
