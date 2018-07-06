import { Component, OnInit } from '@angular/core';
import { IWeather, IObservation, IResponse } from './interface/IWeather';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city: string;
  weather: IWeather;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.city = 'kaysville';
    this.weather = {
      response: {} as IResponse,
      current_observation: {
        image: {
          url: ''
        },
        display_location: {},
        observation_location: {},
        estimated: {}
      } as IObservation
    };
    this.weather.current_observation.image.url = '';
    this.weatherService.getWeather(this.city).subscribe(
      res => {
        this.weather = res;
        console.log(this.weather);
      }
    );
  }

}
