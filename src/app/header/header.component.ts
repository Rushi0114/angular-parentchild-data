import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() companyName: any;
  @Input() customers: any;
  @Output() displayChild = new EventEmitter();
  @Output() displayData = new EventEmitter();

  constructor(private cuatomerService: CustomerService) {}

  cnName: any;
  count: number = 0;
  customers1: any;
  customer: Customer;

  ngOnInit() {
    this.companyName;
    this.customers;
    this.customers1 = this.cuatomerService.cusstomerData;
    this.displayChild.emit("I am Child");
  }
  display() {
    this.count = +1;
    this.displayChild.emit(this.count);
    this.displayData.emit(this.customers1);
  }
}
