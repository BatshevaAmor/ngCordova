import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private contactsList = [];

  constructor(private service: ContactsService) {
  }

  ngOnInit() {
    this.contactsList = this.service.getContacts();
  }

  scrollUp() {
    document.getElementById('contactList').scrollBy({top: -238});
  }

  scrollDown() {
    document.getElementById('contactList').scrollBy({top: 238});
  }

}
