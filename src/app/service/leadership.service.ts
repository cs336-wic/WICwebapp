import { Injectable } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";

export interface firestoreRec {
  bio: string;
  name: string;
  position: string;
  year: string;
  picture: string;
  email: string;
}

@Injectable({
  providedIn: "root",
})
export class LeadershipService {
  // public items: ;
  constructor(private db: AngularFirestore) {}

  public bio: string = "bio";
  public name: string = "df";
  public position: string = "f";
  public year: string = "faf";
  public picture: string = "gadg";
  public email: string = "ag";

  async get_pres() {
    console.log("test1");
    const res = await this.db
      .doc<firestoreRec>("/People/bnKJYAxYAvap2RzuWaDS")
      .ref.get();
    console.log(res.data());

    console.log("test2");
    // this.items = this.res;
    // this.items = this.db.doc<firestoreRec>.valueChanges().subscribe((res) => {
  }
}
