import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessageSchema } from './schema/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Messages', schema: MessageSchema }]),
  ],
  controllers: [
    MessagesController,
  ],
  providers: [
    MessagesService,
  ],
})
export class MessagesModule {}
