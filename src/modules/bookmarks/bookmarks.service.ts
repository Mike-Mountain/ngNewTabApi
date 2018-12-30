import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IBookmarksService, IBookmark } from './interfaces';
import { CreateBookmarkDto } from './dto/createBookmark.dto';
import { debug } from 'console';

@Injectable()
export class BookmarksService implements IBookmarksService {
  constructor(@InjectModel('Bookmarks') private readonly bookmarkModel: Model<IBookmark>) {
  }

  async findAll(): Promise<IBookmark[]> {
    return await this.bookmarkModel.find().exec();
  }

  async findOne(options: object): Promise<IBookmark> {
    return await this.bookmarkModel.findOne(options).exec();
  }

  async findById(ID: string): Promise<IBookmark> {
    return await this.bookmarkModel.findById(ID).exec();
  }

  async create(createBookmarkDto: CreateBookmarkDto): Promise<IBookmark> {
    const createdNote = new this.bookmarkModel(createBookmarkDto);
    return await createdNote.save();
  }

  async update(ID: string, newValue: IBookmark): Promise<IBookmark> {
    const todo = await this.bookmarkModel.findById(ID).exec();
    if (!todo._id) {
      debug('todo not found');
    }
    await this.bookmarkModel.findByIdAndUpdate(ID, newValue).exec();
    return await this.bookmarkModel.findById(ID).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.bookmarkModel.findByIdAndDelete(ID).exec();
      return 'The todo has been deleted';
    } catch (err) {
      debug(err);
      return 'The todo could not be deleted';
    }
  }
}
