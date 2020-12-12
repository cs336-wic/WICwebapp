import { Component, HostBinding } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  toggleControl = new FormControl(false);

  @HostBinding("class") className = "";

  constructor() {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = "darkMode";
      this.className = darkMode ? darkClassName : "";
    });
  }
}
