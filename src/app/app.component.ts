import { Component } from "@angular/core";
import { Customer } from "./customer";
import { CustomerService } from "./customer.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  companyName = "Mphasis";
  customers: any;
  customers1: any;
  constructor(private cuatomerService: CustomerService) {}

  ngOnInit() {
    this.customers = this.cuatomerService.cusstomerData;
    console.log(this.customers);
    console.log(this.customers);
  }

  show(value) {
    console.log("Cnstructed in parent", value);
  }

  displayChild(value: any) {
    console.log("Cnstructed in parent", value);
    this.customers1 = value;
  }
}
