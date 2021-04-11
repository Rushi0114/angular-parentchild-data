import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./header/header.component";
import { CustomerService } from "./customer.service";
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HeaderComponent, TemplateFormComponent],
  bootstrap: [AppComponent],
  providers: [CustomerService]
})
export class AppModule {}
