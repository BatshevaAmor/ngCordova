import {Injectable} from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() {
  }

  public getContacts() {
    return [
      {name: 'Batsheva Amor', img: 'batsheva'},
      {name: 'batya Amor', img: 'batya'},
      {name: 'Rivka Amor', img: 'rivka'},
      {name: 'Danny Amor', img: 'danny'},
      {name: 'Yossi Amor', img: 'yossi'}];
  }
}
