import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamService } from './team/service/team.service';
import { WeatherService } from './weather/service/weather.service';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TeamService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
