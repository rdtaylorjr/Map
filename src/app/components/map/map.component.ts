import { formatNumber } from '@angular/common';
import { Component, HostListener, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { } from "@googlemaps/google-maps-services-js";
import { CovidData } from 'src/app/interfaces/covid-data';
import { CovidService } from 'src/app/services/covid.service';
import { __values } from 'tslib';

declare let google:any

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  data: any[] = []
  @Input() color: string = 'd9534f'
  chart: any

  constructor(private covidService : CovidService, @Inject(LOCALE_ID) private locale: string, private router: Router) { }

  ngOnInit(): void {   
    this.covidService.getCovidData().subscribe(response => {
      this.data = response.data.map((country: CovidData) => {
        return [{ v: country.code, f: country.name},
          this.getColor(country.latest_data),
          this.tooltip(country.latest_data)
        ]
      })
      this.drawMap()
    })
  }

  drawMap() {
    google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': 'AIzaSyCFT4q1jTVWh8bFfsJZG5mFXR-VrdHB_NY'
    });

    google.charts.setOnLoadCallback(() => {
      var data = new google.visualization.DataTable()
      data.addColumn('string', 'Country')
      data.addColumn('number', 'Confirmed')
      data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } })
      data.addRows(this.data)

      var options = {
        displayMode: 'regions',
        domain: 'IN',
        tooltip: { isHtml: true, trigger: 'focus' },
        enableRegionInteractivity: true,
        geochartVersion: 11, 
        width: window.innerWidth,
        keepAspectRatio: true,
        colorAxis: { colors: ['f7f7f7', this.color] }
      };
  
      let chart = new google.visualization.GeoChart(document.getElementById('regions_div'))
  
      chart.draw(data, options)

      google.visualization.events.addListener(chart, 'select', () => {
        var selectedItem = chart.getSelection()[0]
        if (selectedItem) {
          let country = data.getValue(selectedItem.row, 0)
          // alert('The user selected ' + country);
          this.router.navigate(['map/detail', country])
        }

      });
    });


  }

  getColor(latest_data: any) {
    switch (this.color) {
      case '0275d8': return latest_data.critical
      case '5cb85c': return latest_data.confirmed
      case '5bc0de': return latest_data.recovered
      case 'f0ad4e': return latest_data.deaths
      default: return latest_data.calculated.cases_per_million_population
    }
  }

  tooltip(latest_data: any) {
    return '<div style="white-space: nowrap;">' +
        '<div><b>Covid Cases</b></div>' +
        '<div ' + (this.color == '0275d8' ? 'class="text-primary"' : '') + '>Active: ' +
          '<b>' + formatNumber(latest_data.critical, this.locale) + '</b></div>' +
        '<div ' + (this.color == '5cb85c' ? 'class="text-success"' : '') + '>Confirmed: ' +
          '<b>' + formatNumber(latest_data.confirmed, this.locale) + '</b></div>' +
        '<div ' + (this.color == '5bc0de' ? 'class="text-info"' : '') + '>Recovered: ' +
          '<b>' + formatNumber(latest_data.recovered, this.locale) + '</b></div>' +
        '<div ' + (this.color == 'f0ad4e' ? 'class="text-warning"' : '') + '>Deceased: ' +
          '<b>' + formatNumber(latest_data.deaths, this.locale) + '</b></div>' +
        '<div ' + (this.color == 'd9534f' ? 'class="text-danger"' : '') + '>Per million: ' +
          '<b>' + formatNumber(latest_data.calculated.cases_per_million_population, this.locale) + '</b></div>' +
      '</div>'
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.drawMap()
  }

}
