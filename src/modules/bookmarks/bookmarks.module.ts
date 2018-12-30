import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksController } from './bookmarks.controller';
import { BookmarksService } from './bookmarks.service';
import { BookmarkSchema } from './schema/bookmark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Bookmarks', schema: BookmarkSchema }]),
  ],
  controllers: [
    BookmarksController,
  ],
  providers: [
    BookmarksService,
  ],
})
export class BookmarksModule {}
