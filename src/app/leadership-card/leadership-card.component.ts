import { Component, OnInit } from '@angular/core';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
// export interface firestoreRec { bio: string, name: string, position: string, year: string, picture: string, email: string };

@Component({
  selector: 'app-leadership-card',
  templateUrl: './leadership-card.component.html',
  styleUrls: ['./leadership-card.component.scss']
})
export class LeadershipCardComponent implements OnInit {

  // public leadership: firestoreRec[];

  constructor() { }

  ngOnInit(): void {
  }

}
