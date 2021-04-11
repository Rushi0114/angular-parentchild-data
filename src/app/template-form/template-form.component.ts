import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"]
})
export class TemplateFormComponent implements OnInit {
  constructor() {}

  loginForm: NgForm;
  ngOnInit() {}

  customer = { username: "aa", password: "1234", email: "abc" };
  submit(data) {
    console.log(data.username);
  }
}
