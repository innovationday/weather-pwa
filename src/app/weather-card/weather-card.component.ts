import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit, OnChanges, AfterViewInit {

  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;
  weatherDetails: any[] = [];
  search: any;
  @Input() searchCountry: any;
  @Input() searchValue: any;


  constructor(public weather: WeatherService) { console.log("searchcountry", this.searchCountry) }

  ngOnInit() {
  }

  weatherReport() { 
    this.weather.getWeatherDetails(this.searchCountry)
      .subscribe(weather => {
        console.log("weather report", [...this.weatherDetails, weather])
        this.weatherDetails.push(weather);
      }, (error) => {
        console.log(error.message)
      }
      );

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchCountry'] && changes['searchCountry']['currentValue']) {
      this.weatherReport();
    }
  }

  ngAfterViewInit() {
  }
}
