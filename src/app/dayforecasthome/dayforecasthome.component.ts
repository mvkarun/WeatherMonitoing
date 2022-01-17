import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Iweather } from '../iweather';

@Component({
  selector: 'app-dayforecasthome',
  templateUrl: './dayforecasthome.component.html',
  styleUrls: ['./dayforecasthome.component.css'],
})
export class DayforecasthomeComponent implements OnInit {
  constructor(private dataservice: DataService) {}
  weatherforecast: Iweather[] = [];
  ngOnInit(): void {
    this.dataservice.getForeCast().subscribe((data) => {
      this.weatherforecast = data;
    });
  }
}
