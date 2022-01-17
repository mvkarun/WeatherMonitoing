import { Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iweather } from './iweather';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getForeCast(): Observable<Iweather[]> {
    return this.httpClient
      .get<any>(
        `https://www.7timer.info/bin/civillight.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`
      )
      .pipe(pluck('dataseries'));
  }
}
