import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CovidComponent } from './components/covid/covid.component';
import { CovidMapComponent } from './components/covid/covid-map/covid-map.component';
import { ActiveComponent } from './components/covid/active/active.component';
import { ConfirmedComponent } from './components/covid/confirmed/confirmed.component';
import { RecoveredComponent } from './components/covid/recovered/recovered.component';
import { DeceasedComponent } from './components/covid/deceased/deceased.component';
import { DetailComponent } from './components/covid/detail/detail.component';

import { WeatherComponent } from './components/weather/weather.component';
import { WeatherMapComponent } from './components/weather/weather-map/weather-map.component';

const routes: Routes = [
  { path: '', redirectTo: '/covid/map', pathMatch: 'full' },
  { path: 'covid', component: CovidComponent,
    children: [
      { path: 'map', component: CovidMapComponent },
      { path: 'map/active', component: ActiveComponent },
      { path: 'map/confirmed', component: ConfirmedComponent },
      { path: 'map/recovered', component: RecoveredComponent },
      { path: 'map/deceased', component: DeceasedComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'detail/:country', component: DetailComponent }
    ]
  },
  { path: 'weather', component: WeatherComponent,
    children: [
      { path: 'map', component: WeatherMapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
