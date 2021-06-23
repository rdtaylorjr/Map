import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  // colorBy = 'cases_per_million_population'
  colorBy = 'active'

  constructor() { }

  getColorBy(latest_data: any) {
    switch (this.colorBy) {
      case 'active': {
        return latest_data.critical
        break
      }
      case 'confirmed': {
        return latest_data.confirmed
        break
      }
      case 'recovered': {
        return latest_data.recovered
        break
      }
      case 'deceased': {
        return latest_data.deaths
        break
      }
      default: {
        return latest_data.calculated.cases_per_million_population
      }
    }
  }

  setColorBy(colorBy: string) {
    this.colorBy = colorBy
  }
}
