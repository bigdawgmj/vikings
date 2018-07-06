import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { IWeather } from '../interface/IWeather';

@Injectable()
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string): Observable<IWeather> {
    return this.http.get<IWeather>('api/wu?city=' + city);
  }
}
