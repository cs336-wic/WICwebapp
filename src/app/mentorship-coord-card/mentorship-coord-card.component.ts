import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";
import { firestoreRec } from '../firestoreRec';

@Component({
  selector: 'app-mentorship-coord-card',
  templateUrl: './mentorship-coord-card.component.html',
  styleUrls: ['./mentorship-coord-card.component.scss']
})
export class MentorshipCoordCardComponent implements OnInit {
  public items = [];
  constructor(public db: AngularFirestore) { }

  async ngOnInit() {
    const mentorshipCoord = await this.db
      .doc<firestoreRec>("/People/g6edHl2176VFnbDom9EV")
      .ref.get();
    this.items.push(mentorshipCoord.data());
    // console.log(this.items);
  }

}
