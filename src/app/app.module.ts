import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DayforecastComponent } from './dayforecast/dayforecast.component';
import { DayforecasthomeComponent } from './dayforecasthome/dayforecasthome.component';
import { DayforecastdetailsComponent } from './dayforecastdetails/dayforecastdetails.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    DayforecastComponent,
    DayforecasthomeComponent,
    DayforecastdetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
