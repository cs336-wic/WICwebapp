import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LeadershipComponent } from "./pages/leadership/leadership.component";
import { JoinUsComponent } from "./pages/join-us/join-us.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AboutComponent } from "./pages/about/about.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EventsComponent } from "./pages/events/events.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LeadershipCardComponent } from "./leadership-card/leadership-card.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { firebaseConfig } from "./credentials";
import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeadershipComponent,
    JoinUsComponent,
    ContactComponent,
    AboutComponent,
    EventsComponent,
    LeadershipCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatSlideToggleModule,
  ],
  exports: [MatCardModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
