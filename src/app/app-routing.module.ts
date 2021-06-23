import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CovidComponent } from './components/covid/covid.component';
import { CovidMapComponent } from './components/covid/covid-map/covid-map.component';
import { ActiveComponent } from './components/covid/covid-map/active/active.component';
import { ConfirmedComponent } from './components/covid/covid-map/confirmed/confirmed.component';
import { RecoveredComponent } from './components/covid/covid-map/recovered/recovered.component';
import { DeceasedComponent } from './components/covid/covid-map/deceased/deceased.component';
import { DetailComponent } from './components/covid/detail/detail.component';

import { WeatherComponent } from './components/weather/weather.component';
import { WeatherMapComponent } from './components/weather/weather-map/weather-map.component';
import { WeatherDetailComponent } from './components/weather/weather-detail/weather-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/covid/map', pathMatch: 'full' },
  { path: 'covid', component: CovidComponent,
    children: [
      { path: 'map', component: CovidMapComponent,
        children: [{ path: 'detail/:country', component: DetailComponent }]
      },
      { path: 'map/active', component: ActiveComponent,
        children: [{ path: 'detail/:country', component: DetailComponent }]
      },
      { path: 'map/confirmed', component: ConfirmedComponent,
        children: [{ path: 'detail/:country', component: DetailComponent }]
      },
      { path: 'map/recovered', component: RecoveredComponent,
        children: [{ path: 'detail/:country', component: DetailComponent }]
      },
      { path: 'map/deceased', component: DeceasedComponent,
        children: [{ path: 'detail/:country', component: DetailComponent }]
      }
    ]
  },
  { path: 'weather', component: WeatherComponent,
    children: [
      { path: 'map', component: WeatherMapComponent,
        children: [{ path: 'detail/:coordinates', component: WeatherDetailComponent }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
