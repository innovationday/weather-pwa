import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(public http: HttpClient) {
  }

  getWeatherDetails(city: string): Subject<any> {
    const dataSubject = new Subject<any>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=952d6b1a52fe15a7b901720074680562`)
      .subscribe((data) => {
        dataSubject.next(data);
      });
    return dataSubject;
  }

  // getWeatherState(city: string): Subject<string> {
  //   const dataSubject = new Subject<string>();
  //   this.http.get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=952d6b1a52fe15a7b901720074680562`)
  //     .subscribe((data) => {
  //       dataSubject.next(data['weather'][0].main);
  //     });
  //   return dataSubject;
  // } 

  // getCurrentTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
  //   const dataSubject = new Subject<number>();
  //   this.http.get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
  //     .subscribe((weather: any) => {
  //       dataSubject.next(Math.round(Number(weather.main.temp)));
  //     });
  //   return dataSubject;
  // }

  // getMinTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
  //   const dataSubject = new Subject<number>();
  //   let min: number;
  //   this.http.get(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
  //     .subscribe((weather: any) => {
  //       min = weather.list[0].main.temp;
  //       weather.list.forEach((value) => {
  //         if (min > value.main.temp) {
  //           min = value.main.temp;
  //         }
  //       });
  //       dataSubject.next(Math.round(min));
  //     });
  //   return dataSubject;
  // }

  // getMaxTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
  //   const dataSubject = new Subject<number>();
  //   let max: number;
  //   this.http.get(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
  //     .subscribe((weather: any) => {
  //       max = weather.list[0].main.temp;
  //       weather.list.forEach((value) => {
  //         if (max < value.main.temp) {
  //           max = value.main.temp;
  //         }
  //       });
  //       dataSubject.next(Math.round(max));
  //     });
  //   return dataSubject;
  // }

}
