import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class WeatherService {
  constructor(private http: Http) {
    console.log('Production=' + environment.production);
  }

  getWeatheritemsbyCity(cityName): Observable<any> {
    return this.http.get(
      environment.baseUrl +
      'weather?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units
    )
    .map(response => response.json())
    .catch(this.handleError);
  }

  getWeatherForecast(cityName): Observable<any[]> {
    return this.http.get(environment.baseUrl + 'forecast?q=' + cityName + '&appid=' + environment.appId + '&units=' + environment.units)
    .map(response => this.extractData(response))
    .catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body.list || { };
  }

  private handleError (error: any) {
    let errMsg: string;
    errMsg = JSON.parse(error._body).message;
    return Observable.throw(errMsg);
  }
}
