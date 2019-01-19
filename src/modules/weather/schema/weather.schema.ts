import * as mongoose from 'mongoose';

export const WeatherSchema = new mongoose.Schema({
  coord: {
    lon: Number,
    lat: Number,
  },
  weather: Array,
  main: {
    temp: Number,
    pressure: Number,
    humidity: Number,
    temp_min: Number,
    temp_max: Number,
  },
  visibility: Number,
  wind: {
    speed: Number,
    deg: Number,
  },
  clouds: {
    all: Number,
  },
  sys: {
    id: Number,
    country: String,
    sunrise: Date,
    sunset: Date,
  },
  id: Number,
  name: String,
  cos: Number,
});


