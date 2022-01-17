import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iweather } from '../iweather';

@Component({
  selector: 'app-dayforecastdetails',
  templateUrl: './dayforecastdetails.component.html',
  styleUrls: ['./dayforecastdetails.component.css'],
})
export class DayforecastdetailsComponent implements OnInit {
  @Input() weather: Iweather;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      weather: Iweather;
    };

    this.weather = state.weather;
  }

  ngOnInit(): void {}
}
