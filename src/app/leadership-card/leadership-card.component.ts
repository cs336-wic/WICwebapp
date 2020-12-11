import { Component, OnInit } from "@angular/core";
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";
import { LeadershipService } from "../service/leadership.service";

@Component({
  selector: "app-leadership-card",
  templateUrl: "./leadership-card.component.html",
  styleUrls: ["./leadership-card.component.scss"],
})
export class LeadershipCardComponent implements OnInit {
  constructor(public leadersService: LeadershipService) {}

  async ngOnInit() {
    this.leadersService.get_pres();
    this.leadersService.get_vice();
    this.leadersService.get_vice2();
    this.leadersService.get_coord();
  }
}
