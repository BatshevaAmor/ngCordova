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
import {SelectedPipe} from './pipes/selected.pipe';
import {FormsModule} from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';

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
    ComposeComponent,
    SelectedPipe,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [ContactsService, SelectedPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
