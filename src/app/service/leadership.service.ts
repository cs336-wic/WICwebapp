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
  constructor(private db: AngularFirestore) {
    // this.db.collection("People").add({
    //   bio: "Hello, i'm the ...",
    //   name: "Sinai Park",
    //   position: "vice president",
    //   year: "junior",
    //   picture: ".../assets/logo.png",
    //   email: "sp46@students.calvin.edu",
    // });
  }

  public bio: string = "bio";
  public name: string = "df";
  public position: string = "f";
  public year: string = "faf";
  public picture: string = "gadg";
  public email: string = "ag";

  public items = [];

  async get_pres() {
    const res = await this.db
      .doc<firestoreRec>("/People/0LyiPKt52ZVAme1jX3We")
      .ref.get();
    // console.log(res.data());
    this.items.push(res.data());
  }

  async get_vice() {
    const res = await this.db
      .doc<firestoreRec>("/People/pkpKVdPzztZRDkFzKDtG")
      .ref.get();
    // console.log(res.data());
    this.items.push(res.data());
  }

  async get_vice2() {
    const res = await this.db
      .doc<firestoreRec>("/People/uh8ONxTBf2spt9kZKegC")
      .ref.get();
    // console.log(res.data());
    this.items.push(res.data());
  }

  async get_coord() {
    const res = await this.db
      .doc<firestoreRec>("/People/pkpKVdPzztZRDkFzKDtG")
      .ref.get();
    // console.log(res.data());
    this.items.push(res.data());
    console.log(this.items);
  }
}
