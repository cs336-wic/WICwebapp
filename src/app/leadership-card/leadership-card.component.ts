import { Component, OnInit, HostBinding } from "@angular/core";
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";
import { FormControl } from "@angular/forms";

import { firestoreRec } from '../firestoreRec';

@Component({
  selector: "app-leadership-card",
  templateUrl: "./leadership-card.component.html",
  styleUrls: ["./leadership-card.component.scss"],
})
export class LeadershipCardComponent implements OnInit {
  toggleControl = new FormControl(false);

  @HostBinding("class") className = "";
  //array to store items
  public items = [];

  constructor(public db: AngularFirestore) { }

  async ngOnInit() {
    //referenced prof norman's notes on email
    const res = await this.db
      .doc<firestoreRec>("/People/0LyiPKt52ZVAme1jX3We")
      .ref.get();
    this.items.push(res.data());
    // console.log(this.items);

    //referenced zoaibkhan.com/blog/angular-material-dark-mode-in-3-steps/
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = "darkMode";
      this.className = darkMode ? darkClassName : "";
    });
  }
}
