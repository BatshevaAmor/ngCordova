import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {buildAnimationTimelines} from '@angular/animations/browser/src/dsl/animation_timeline_builder';
import {error} from 'util';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) {
  }

  public getContacts(): any {
    // this.http.get('http://localhost:3000/health').toPromise().then(data => console.log(data)).catch(error => console.error(error));
    return [
      {name: 'Batsheva Amor', img: 'batsheva', email: ['amorbatsheva@gmail.com'], number: '+972-3-5709340'},
      {name: 'Batya Amor', img: 'batya', email: ['batyaamor@gmail.com'], number: '+972-3-5709340'},
      {name: 'Rivka Amor', img: 'rivka', email: ['rivkaamor@gmail.com'], number: '+972-53-4158795'},
      {name: 'Danny Amor', img: 'dannyMerav', number: '+972-2-'},
      {name: 'LN', img: 'ln', number: ''},
      {name: 'Batya Abraham', img: 'batyaAbraham', number: ''},
      {name: 'Yehuda Abraham', img: 'yeuda', number: ''},
      {name: 'Chaim & Ruthy Holder', img: 'chaimRuthy', number: ''},
      {name: 'Shauli & Racheli Amor', img: 'shauliRacheli', number: '+972-58-3266274'},
      {name: 'Moshe & Ayala Amor', img: 'mosheAyala', email: ['4137415@gmail.com'], number: '+972-527607320'},
      {name: 'Baruch & Tali Ochayon', img: 'tali', number: '+972-'},
      {
        name: 'All family',
        img: 'all-family',
        email: ['amorbatsheva@gmail.com', 'batyaamor@gmail.com', 'rivkaamor@gmail.com', '4137415@gmail.com']
      },
      {name: 'kids', img: 'kids', number: '+972-3-5709340'},
      {name: 'Yossi Amor', img: 'yossi', number: '+972-3-5709340'}];
  }

  sendEmail(email) {
    debugger
    this.http.post('http://localhost:3000/sendEmail', email).toPromise().then(data => console.log(data)).catch(error => console.error(error));
  }
}
