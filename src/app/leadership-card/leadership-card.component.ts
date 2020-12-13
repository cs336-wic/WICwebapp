import { Component, OnInit, HostBinding } from "@angular/core";
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";
import { FormControl } from "@angular/forms";

export interface firestoreRec {
  bio: string;
  name: string;
  position: string;
  year: string;
  picture: string;
  email: string;
  linkedin: string;
}

@Component({
  selector: "app-leadership-card",
  templateUrl: "./leadership-card.component.html",
  styleUrls: ["./leadership-card.component.scss"],
})
export class LeadershipCardComponent implements OnInit {
  toggleControl = new FormControl(false);

  @HostBinding("class") className = "";

  public items = [];

  constructor(public db: AngularFirestore) {}

  async ngOnInit() {
    //referenced prof norman's notes on email
    const res = await this.db
      .doc<firestoreRec>("/People/0LyiPKt52ZVAme1jX3We")
      .ref.get();
    this.items.push(res.data());

    const res2 = await this.db
      .doc<firestoreRec>("/People/pkpKVdPzztZRDkFzKDtG")
      .ref.get();
    this.items.push(res2.data());

    const res3 = await this.db
      .doc<firestoreRec>("/People/uh8ONxTBf2spt9kZKegC")
      .ref.get();
    this.items.push(res3.data());

    const res4 = await this.db
      .doc<firestoreRec>("/People/g6edHl2176VFnbDom9EV")
      .ref.get();
    this.items.push(res4.data());
    console.log(this.items);

    //referenced zoaibkhan.com/blog/angular-material-dark-mode-in-3-steps/
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = "darkMode";
      this.className = darkMode ? darkClassName : "";
    });
  }
}
