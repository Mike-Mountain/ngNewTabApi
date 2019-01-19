import {Document} from 'mongoose';

export interface IWeather extends Document {
  readonly coord: {
    readonly lon: number,
    readonly lat: number,
  };
  weather: Array<any>;
  main: {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
  };
  visibility: number;
  wind: {
    speed: number,
    deg: number,
  };
  clouds: {
    all: number,
  };
  sys: {
    id: number,
    country: string,
    sunrise: Date,
    sunset: Date,
  };
  id: number;
  name: string;
  cos: number;
}