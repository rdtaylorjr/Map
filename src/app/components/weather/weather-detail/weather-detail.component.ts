import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidData } from 'src/app/interfaces/covid-data';
import { CovidService } from 'src/app/services/covid.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

    data!: any
    coordinates!: string
  
    constructor(private weatherService : WeatherService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void { 
      this.coordinates = this.activatedRoute.snapshot.paramMap.get('coordinates') || ''
      let [lat, lon] = this.coordinates.split(' ')
      lat = lat.slice(0, -1)
      this.weatherService.getWeatherData(Number(lat), Number(lon)).subscribe(response => { 
        this.data = response
      })
    }
  
    back() {
      this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
    }
  }
  