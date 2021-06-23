import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CovidComponent } from './components/covid/covid.component';
import { CovidMenuComponent } from './components/covid/covid-menu/covid-menu.component';
import { CovidMapComponent } from './components/covid/covid-map/covid-map.component';

import { ActiveComponent } from './components/covid/covid-map/active/active.component';
import { ConfirmedComponent } from './components/covid/covid-map/confirmed/confirmed.component';
import { RecoveredComponent } from './components/covid/covid-map/recovered/recovered.component';
import { DeceasedComponent } from './components/covid/covid-map/deceased/deceased.component';
import { DetailComponent } from './components/covid/detail/detail.component';

import { WeatherComponent } from './components/weather/weather.component';
import { WeatherMenuComponent } from './components/weather/weather-menu/weather-menu.component';
import { WeatherMapComponent } from './components/weather/weather-map/weather-map.component';

@NgModule({
  declarations: [
    AppComponent,

    CovidComponent,
    CovidMenuComponent,
    CovidMapComponent,

    ActiveComponent,
    ConfirmedComponent,
    RecoveredComponent,
    DeceasedComponent,
    DetailComponent,

    WeatherComponent,
    WeatherMenuComponent,
    WeatherMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
