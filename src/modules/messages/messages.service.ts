import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IMessage, IMessagesService } from './interfaces';
import { CreateMessageDto } from './dto/createMessage.dto';
import { debug } from 'console';

@Injectable()
export class MessagesService implements IMessagesService {

  constructor(@InjectModel('Messages') private readonly messagesModel: Model<IMessage>) {
  }

  async findAll(): Promise<IMessage[]> {
    return await this.messagesModel.find().exec();
  }

  async find(options: object): Promise<IMessage[]> {
    return await this.messagesModel.find(options).exec();
  }

  async findById(ID: string): Promise<IMessage> {
    return await this.messagesModel.findById(ID).exec();
  }

  async create(createMessageDto: CreateMessageDto): Promise<IMessage> {
    const createdMessage = new this.messagesModel(createMessageDto);
    return await createdMessage.save();
  }

  async update(ID: string, newValue: IMessage): Promise<IMessage> {
    const message = await this.messagesModel.findById(ID).exec();
    if (!message._id) {
      debug('todo not found');
    }
    await this.messagesModel.findByIdAndUpdate(ID, newValue).exec();
    return await this.messagesModel.findById(ID).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.messagesModel.findByIdAndRemove(ID).exec();
      return 'The Message has been deleted';
    } catch (err) {
      debug(err);
      return 'The Message could not be deleted';
    }
  }
}
