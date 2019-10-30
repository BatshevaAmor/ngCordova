import {Route, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {EmailComponent} from './email/email.component';
import {MainComponent} from './main/main.component';

const router: Routes = [
  {path: 'pages', component: AppComponent, children: []},
  {path: 'main', component: MainComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'email', component: EmailComponent},
  {path: '', redirectTo: 'default', pathMatch: 'full'},
  {path: '**', component: AppComponent}
];

export default router;

