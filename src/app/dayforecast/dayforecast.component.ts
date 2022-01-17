import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iweather } from '../iweather';

@Component({
  selector: 'app-dayforecast',
  templateUrl: './dayforecast.component.html',
  styleUrls: ['./dayforecast.component.css'],
})
export class DayforecastComponent implements OnInit {
  @Input() weather: Iweather;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onDaySelect(): void {
    console.log('navigating');
    this.router.navigate(['dayforecastdetails'], {
      state: { weather: this.weather },
    });
  }
}
