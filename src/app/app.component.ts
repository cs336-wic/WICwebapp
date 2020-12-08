import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "WICwebapp";

  setDark = false;

  constructor() {}

  ngOnInit(): void {}

//   onChangeToggle() {
//     this.setDark = !this.setDark;
//     this.mode.emit(this.setDark);
//     console.log(this.setDark);
//   }
// }
