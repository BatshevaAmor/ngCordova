import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public data;
  private img: String;
  private name: String;

  constructor() {
  }

  ngOnInit() {
  }

}
