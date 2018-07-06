import { TestBed, inject, async } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('WeatherService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [WeatherService]
    });
  });

  beforeEach(inject([WeatherService], w => {
    service = w
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the weather api', async(
    inject([HttpClient, HttpTestingController],
      (http: HttpClient, backend: HttpTestingController) => {
        service.getWeather('Kaysville').subscribe();

        backend.expectOne({
          url: 'api/wu?city=Kaysville',
          method: 'GET'
        });
      })
  ));

});
