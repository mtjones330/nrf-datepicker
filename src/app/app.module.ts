import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NrfDatepickerComponent } from "./nrf-datepicker/nrf-datepicker.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NrfDatepickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
