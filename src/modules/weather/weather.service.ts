import { Model } from 'mongoose';
import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IWeatherService, IWeather } from './inerfaces';
import { debug } from 'console';
import { Observable, of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { catchError } from 'rxjs/operators';

@Injectable()
export class WeatherService implements IWeatherService {
  constructor(@InjectModel('Weather') private readonly weatherModel: Model<IWeather>,
              private readonly http: HttpService) {
  }

  findByCityId(options: any): Observable<AxiosResponse<IWeather>> {
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${options.id}&units=metric&APPID=e5d8edd7558ccb5fb5e1be8eaf712220`;
    const http$ = this.http.get<IWeather>(url);
    return http$.pipe(
      catchError(err => {
        debug(`ERROR: ${err.code} -> ${err.message}`);
        return of(null);
      }),
    );
  }

  findByCityName(options: any): Observable<AxiosResponse<IWeather>> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${options.name}&units=metric&APPID=e5d8edd7558ccb5fb5e1be8eaf712220`;
    const http$ = this.http.get<IWeather>(url);
    return http$.pipe(
      catchError(err => {
        debug(`ERROR: ${err.code} -> ${err.message}`);
        return of(null);
      }),
    );
  }

}
