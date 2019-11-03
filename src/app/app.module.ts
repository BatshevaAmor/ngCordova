import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {EmailComponent} from './email/email.component';
import {MusicComponent} from './music/music.component';
import {VidoesComponent} from './vidoes/vidoes.component';
import {PhotosComponent} from './photos/photos.component';
import {ContactComponent} from './contact/contact.component';
import router from './app.router';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ContactsService} from './services/contacts.service';
import {ComposeComponent} from './compose/compose.component';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EmailComponent,
    MusicComponent,
    VidoesComponent,
    PhotosComponent,
    ContactComponent,
    MainComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
