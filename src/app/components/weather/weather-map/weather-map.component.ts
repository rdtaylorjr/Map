import { Component, HostListener, OnInit } from '@angular/core';

import { } from "@googlemaps/google-maps-services-js";
declare let google: any

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.css']
})
export class WeatherMapComponent implements OnInit {

  data = [
    ['Rome',      2761477],
    ['Milan',     1324110],
    ['Naples',    959574],
    ['Turin',     907563],
    ['Palermo',   655875],
    ['Genoa',     607906],
    ['Bologna',   380181],
    ['Florence',  371282],
    ['Fiumicino', 67370],
    ['Anzio',     52192],
    ['Ciampino',  38262]
  ]

  constructor() { }

  ngOnInit(): void { 
    this.drawMap()
  }

  drawMap() {
    google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': 'AIzaSyCFT4q1jTVWh8bFfsJZG5mFXR-VrdHB_NY'
    })

    google.charts.setOnLoadCallback(() => {
      let data = new google.visualization.DataTable()
      data.addColumn('string', 'City')
      data.addColumn('number', 'Population')
      data.addRows(this.data)

      var options = {
        displayMode: 'markers',
        geochartVersion: 11, 
        domain: 'IN',
        width: window.innerWidth,
        keepAspectRatio: true,
        colorAxis: {colors: ['green', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    })
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.drawMap()
  }

}
