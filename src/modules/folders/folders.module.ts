import { Module } from '@nestjs/common';
import { FoldersController } from './folders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FolderSchema } from './schema/folder.schema';
import { FoldersService } from './folders.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Folders', schema: FolderSchema }]),
  ],
  controllers: [
    FoldersController,
  ],
  providers: [
    FoldersService,
  ],
})
export class FoldersModule {
}
