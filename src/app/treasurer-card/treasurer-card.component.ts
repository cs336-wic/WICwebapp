import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";
import { firestoreRec } from '../firestoreRec';


@Component({
  selector: 'app-treasurer-card',
  templateUrl: './treasurer-card.component.html',
  styleUrls: ['./treasurer-card.component.scss']
})
export class TreasurerCardComponent implements OnInit {
  public items = [];
  constructor(public db: AngularFirestore) { }

  async ngOnInit() {
    const treasurer = await this.db
      .doc<firestoreRec>("/People/pkpKVdPzztZRDkFzKDtG")
      .ref.get();
    this.items.push(treasurer.data());
    // console.log(this.items);
  }

}
