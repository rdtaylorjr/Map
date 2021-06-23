import { Component, OnInit } from '@angular/core';
// import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-weather-menu',
  templateUrl: './weather-menu.component.html',
  styleUrls: ['./weather-menu.component.css']
})
export class WeatherMenuComponent implements OnInit {

  title = 'WeatherMap'

  constructor() { }
  // constructor(private colorService: ColorService) { }

  ngOnInit(): void { }

  // setColor(colorBy: string) {
  //   this.colorService.setColorBy(colorBy)
  // }

}
