import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { CorsMiddleware } from './middleware/cors.middleware';
import { TodosModule } from './modules/todos/todos.module';
import { TodosService } from './modules/todos/todos.service';
import { NotesModule } from './modules/notes/notes.module';
import { NotesService } from './modules/notes/notes.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarksModule } from './modules/bookmarks/bookmarks.module';
import { BookmarksService } from './modules/bookmarks/bookmarks.service';
import { MessagesModule } from './modules/messages/messages.module';
import { MessagesService } from './modules/messages/messages.service';
import { FoldersModule } from './modules/folders/folders.module';
import { FoldersService } from './modules/folders/folders.service';
import { WeatherModule } from './modules/weather/weather.module';
import { WeatherService } from './modules/weather/weather.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/chrome_new_tab'),
    UsersModule,
    TodosModule,
    NotesModule,
    BookmarksModule,
    MessagesModule,
    FoldersModule,
    WeatherModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    TodosService,
    NotesService,
    BookmarksService,
    MessagesService,
    FoldersService,
    WeatherService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
