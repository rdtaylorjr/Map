import { formatNumber, TitleCasePipe } from '@angular/common';
import { Component, HostListener, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { } from "@googlemaps/google-maps-services-js";
import { CityData } from 'src/app/interfaces/city-data';
import { CityService } from 'src/app/services/city.service';
import { WeatherService } from 'src/app/services/weather.service';
import { googleApiKey } from 'src/assets/apikeys';
declare let google: any;

import { concatMap, map } from 'rxjs/operators';
import {  Observable, combineLatest, zip } from 'rxjs';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.css']
})
export class WeatherMapComponent implements OnInit {

  private data: any
  private cities: CityData[] =[]

  constructor(private cityService: CityService, private weatherService: WeatherService, private router: Router, private activatedRoute: ActivatedRoute, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.getCity().subscribe((cities: any) => {
      this.data = cities.map((weather: any) => 
        [
          { v: weather.coord.lat + ', ' + weather.coord.lon, f: weather.name + ', ' + weather.sys.country }, 
          weather.main.temp,
          weather.population, 
          this.tooltip(weather)
        ]
      )
      this.drawMap()
    })
  }

  getCity(): Observable<any> {
    return this.cityService.getCityData().pipe(
      concatMap(cities => {
        this.cities = cities.data
        const weatherRequests = cities.data.map((city: CityData) => this.getWeather(city))
        return zip(...weatherRequests)
      })
    )
  }
  
  getWeather(city: CityData): Observable<any> {
    return this.weatherService.getWeatherData(city.latitude, city.longitude)
  }

  drawMap() {
    google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': googleApiKey
    })

    google.charts.setOnLoadCallback(() => {
      let data = new google.visualization.DataTable()
      data.addColumn('string', 'City')
      data.addColumn('number', 'Temperature')
      data.addColumn('number', 'Population')
      data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } })
      data.addRows(this.data)

      let options = {
        displayMode: 'markers',
        geochartVersion: 11, 
        domain: 'IN',
        width: window.innerWidth,
        keepAspectRatio: true,
        colorAxis: { colors: ['blue', 'red'] },
        tooltip: { isHtml: true, trigger: focus }
      }
  
      let chart = new google.visualization.GeoChart(document.getElementById('markers_div'))
      chart.draw(data, options)

      google.visualization.events.addListener(chart, 'select', () => {
        var selectedItem = chart.getSelection()[0]
        if (selectedItem) {
          let coordinates = data.getValue(selectedItem.row, 0)
          this.router.navigate(['detail', coordinates], { relativeTo: this.activatedRoute })
        }
      });
    })
  }

  tooltip(city: any) {
    const precipitation = city.weather[0].description
    return '<div style="white-space: nowrap;">' + 
      '<div>Temperature: <b>' + city.main.temp + '° C</b></div>' +
      '<div>Precipitation: <b>' + precipitation[0].toUpperCase() + precipitation.substr(1).toLowerCase() + '</b></div>' +
      '<div>Humidity: <b>' + city.main.humidity + '%</b></div>' +
      '<div>Wind: <b>' + city.wind.speed + ' km/h</b></div>'
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.drawMap()
  }

}