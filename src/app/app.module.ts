import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeadershipComponent,
    JoinUsComponent,
    ContactComponent,
    AboutComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
