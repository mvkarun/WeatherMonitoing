import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DayforecastComponent } from './dayforecast/dayforecast.component';
import { DayforecasthomeComponent } from './dayforecasthome/dayforecasthome.component';
import { DayforecastdetailsComponent } from './dayforecastdetails/dayforecastdetails.component';

const routes: Routes = [
  { path: 'forecasthome', component: DayforecastdetailsComponent },
  { path: 'dayforecast', component: DayforecastComponent },
  { path: 'dayforecastdetails', component: DayforecastdetailsComponent },
  { path: '', redirectTo: 'forecasthome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
