import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular 2";
  name = "sunil";

  onclick(): void {
    alert("hiiiii");
  }
}
