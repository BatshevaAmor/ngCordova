import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  contactsList = [];
  selectedContacts = [];
  showContactsModal: Boolean = false;
  message = '';

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsList = this.contactsService.getContacts();
    this.selectedContacts = JSON.parse(JSON.stringify(this.contactsList));
    // this.selectedContacts[0].selected = true;
  }

  loadContacts() {
    this.showContactsModal = true;
  }

  applyContacts() {
    this.showContactsModal = false;
    this.selectedContacts = this.selectedContacts.concat(this.contactsList.filter(a => a.selected));
  }

  send() {
    let recipients = [];
    this.selectedContacts.forEach(c => recipients = recipients.concat(c.email));
    this.contactsService.sendEmail({rec: recipients, body: this.message});
  }

  selectAll(b: boolean) {
    this.selectedContacts.map(c => c.selected = b);
  }
}
