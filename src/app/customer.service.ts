import { Injectable } from "@angular/core";
import { Customer } from "./customer";

@Injectable()
export class CustomerService {
  customer: Customer;
  constructor() {}

  cusstomerData: Array<Customer> = [
    {
      name: "Sayali",
      age: "27",
      contactNumber: 830853,
      address: "mphasis"
    },
    {
      name: "Rushi",
      age: "27",
      contactNumber: 830854,
      address: "mphasis"
    },
    {
      name: "Rinku",
      age: "27",
      contactNumber: 830855,
      address: "mphasis"
    }
  ];
  customerData() {
    return (this.customer = {
      name: "Rahul",
      age: "27",
      contactNumber: 830853,
      address: "mphasis"
    });
  }
}
