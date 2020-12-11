import { Component, OnInit } from "@angular/core";
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";
import { LeadershipService } from "../service/leadership.service";

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
  public items = [];

  constructor(public db: AngularFirestore) {}

  async ngOnInit() {
    // this.leadersService.get_pres();
    // this.leadersService.get_vice();
    // this.leadersService.get_vice2();
    // this.leadersService.get_coord();

    const res = await this.db
      .doc<firestoreRec>("/People/0LyiPKt52ZVAme1jX3We")
      .ref.get();
    // console.log(res.data());
    this.items.push(res.data());

    const res2 = await this.db
      .doc<firestoreRec>("/People/pkpKVdPzztZRDkFzKDtG")
      .ref.get();
    // console.log(res.data());
    this.items.push(res2.data());

    const res3 = await this.db
      .doc<firestoreRec>("/People/uh8ONxTBf2spt9kZKegC")
      .ref.get();
    // console.log(res.data());
    this.items.push(res3.data());

    const res4 = await this.db
      .doc<firestoreRec>("/People/g6edHl2176VFnbDom9EV")
      .ref.get();
    // console.log(res.data());
    this.items.push(res4.data());
    console.log(this.items);
  }
}
