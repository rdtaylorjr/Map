import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'CovidMap'

  constructor(private colorService: ColorService) { }

  ngOnInit(): void { }

  setColor(colorBy: string) {
    this.colorService.setColorBy(colorBy)
  }

}
