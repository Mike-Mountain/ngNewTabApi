import { Controller, Get, Response, HttpStatus, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { debug } from 'console';

@ApiUseTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {
  }

  @Get('/id/:id')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async getWeather(@Response() res, @Param() param) {
    this.weatherService.findByCityId({ id: param.id }).subscribe(weather => {
      if (weather && weather.data) {
        debug('Weather by id', weather.data);
        return res.status(HttpStatus.OK).send(weather.data);
      } else {
        return res.status(HttpStatus.OK).send('Error Collecting Data');
      }
    });
  }

  @Get('city/:name')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async getWeatherByCity(@Response() res, @Param() param) {
    this.weatherService.findByCityName({ name: param.name }).subscribe(weather => {
      if (weather && weather.data) {
        debug('Weather by id', weather.data);
        return res.status(HttpStatus.OK).send(weather.data);
      } else {
        return res.status(HttpStatus.OK).send('Error Collecting Data');
      }
    });
  }
}
