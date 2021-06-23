import { Injectable } from '@angular/core';
import { CovidData } from '../interfaces/covid-data';
import { CovidService } from './covid.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: CovidData[] = []
  selectedData: any[] = []

  constructor(private covidService : CovidService) { }

  ngOnInit(): void {
    this.covidService.getCovidData().subscribe(response => {
      this.data = response.data
      this.selectedData = this.data.map(country => [country.code, country.latest_data.confirmed])
      this.selectedData.unshift(['Country', 'Confirmed'])
    })
  }

  getData() {
    return this.selectedData
  }

}
