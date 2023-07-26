import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
  customer: Customer;
  constructor() {}

  cusstomerData: Array<Customer> = [
    {
      name: 'abcd',
      age: '27',
      contactNumber: 1234,
      address: 'xyz',
    },
    {
      name: 'abcd',
      age: '27',
      contactNumber: 1234,
      address: 'xyz',
    },
    {
      name: 'abcd',
      age: '27',
      contactNumber: 1234,
      address: 'xyz',
    },
  ];
  customerData() {
    return (this.customer = {
      name: 'Rahul',
      age: '27',
      contactNumber: 830853,
      address: 'xyz',
    });
  }
}
