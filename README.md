# CovidMap / WeatherMap

## Project Description
A fully-responsive, interactive web interface that displays **up-to-date Covid-19 data** for every country in the world and **current weather conditions** for the world's largest cities. Data is displayed on a world map which responds to hover events and click events. 

The user may choose to display current Covid-19 data for each country for **active cases**, total **confirmed cases**, total **recovered cases**, total **deaths**, and **cases per million people**. Detailed data for each country and a **pie chart** showing the relative number of recoveries, deaths, and active cases are displayed when the user clicks on a country. Data is drawn from the **About Corona Api** (https://about-corona.net/) and rendered using the **Google Visualization: Geochart** api from Google Cloud Platform with the 'regions' setting enabled (https://developers.google.com/chart/interactive/docs/gallery/geochart). 

Weather data is displayed for cities larger than 6 million people and colored based on the current temperature in each city. The user may view current **temperature**, **precipitation**, **humidity**, and **wind** for each city. Population data is drawn from the **GeoDB Api** (https://geodb-cities-api.wirefreethought.com). Weather data is drawn from the **OpenWeatherMap Api** (https://openweathermap.org/api) and rendered using the **Google Visualization: Geochart** api with the 'markers' setting enabled.

This project was written using [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2 and Visual Studio Code.

## Opening the project

- Clone the `Map` repository to your local machine. 
- Navigate to the downloaded folder in your terminal.
- Run `ng serve -o` to start a dev server and open the project in your browser.
- Navigate to `http://localhost:4200/` in your browser.

## CovidMap

**/covid/map**
- The root path `/` redirects to `/covid/map` which displays the `covid-menu` and `covid-map` components.
- Navigation buttons at the top of the page allow the user to toggle which dataset is used for coloring the world map.
  'Active': Displays current active Covid-19 cases in each country shaded in blue.
  'Confirmed': Displays total confirmed cases in each country shaded in green.
  'Recovered': Displays total recovered cases in each country shaded in teal.
  '

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
