import { Component } from "@angular/core";

@Component({
  selector: "employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent {
  title = "Employee Details";
  firstName = "Sunil";
  lastName = "Ambekar";
  gender = "Male";
  age = 29;
  showdetails: boolean = false;

  showHide(): void {
    this.showdetails = !this.showdetails;
  }
}
