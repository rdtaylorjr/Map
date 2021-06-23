import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-covid-menu',
  templateUrl: './covid-menu.component.html',
  styleUrls: ['./covid-menu.component.css']
})
export class CovidMenuComponent implements OnInit {

  title = 'CovidMap'

  constructor(private colorService: ColorService) { }

  ngOnInit(): void { }

  setColor(colorBy: string) {
    this.colorService.setColorBy(colorBy)
  }

}
