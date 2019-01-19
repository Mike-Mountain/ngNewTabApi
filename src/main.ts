import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:4200',
      'chrome-extension://cghfdknjcdcoafdcodebdgplgkjfhoef',
      'http://localhost:3200',
    ],
  });

  const options = new DocumentBuilder()
    .setTitle('Chrome New Tab')
    .setDescription('Api for the Chrome New Tab extension')
    .setVersion('0.01')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
