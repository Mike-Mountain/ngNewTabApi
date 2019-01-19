import {IWeather} from './weather.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

export interface IWeatherService {
  findByCityId(options: object): Observable<AxiosResponse<IWeather> | null>;
  findByCityName(options: object): Observable<AxiosResponse<IWeather> | null>;
}