import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { geodbApiKey } from 'src/assets/apikeys';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl : string = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'

  constructor(private http: HttpClient) { }

  getCityData(): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('x-rapidapi-key', geodbApiKey)
    const type = 'CITY'
    const minPopulation = 6000000
    const limit = 100
    return this.http.get<any>(this.baseUrl + '?types=' + type + '&minPopulation=' + minPopulation + '&limit=' + limit + '&excludedCountryIds=CN', {headers: headers})
  }

  getCity(lat: number, lon: number): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('x-rapidapi-key', geodbApiKey)
    const type = 'CITY'
    const minPopulation = 6000000
    const limit = 100
    return this.http.get<any>(this.baseUrl + '?types=' + type + '&minPopulation=' + minPopulation + '&limit=' + limit + '&excludedCountryIds=CN&latitide=' + lat + '&longitude=' + lon, {headers: headers})
  }

}
