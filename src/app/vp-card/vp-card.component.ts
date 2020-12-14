import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";
import { firestoreRec } from '../firestoreRec';

@Component({
  selector: 'app-vp-card',
  templateUrl: './vp-card.component.html',
  styleUrls: ['./vp-card.component.scss']
})
export class VpCardComponent implements OnInit {

  public items = [];
  constructor(public db: AngularFirestore) { }

  async ngOnInit() {
    const vp = await this.db
      .doc<firestoreRec>("/People/uh8ONxTBf2spt9kZKegC")
      .ref.get();
    this.items.push(vp.data());
    // console.log(this.items);
  }
}
