import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { WeatherSchema } from './schema/weather.schema';

@Module({
  controllers: [WeatherController],
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Weather', schema: WeatherSchema }]),
],
providers: [WeatherService],
})

export class WeatherModule {
}
