import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IFolder, IFoldersService } from './interfaces';
import { CreateFolderDto } from './dto/createFolder.dto';
import { debug } from 'console';

@Injectable()
export class FoldersService implements IFoldersService {

  constructor(@InjectModel('Folders') private readonly foldersModel: Model<IFolder>) {
  }

  async findAll(): Promise<IFolder[]> {
    return await this.foldersModel.find().exec();
  }

  async find(options: object): Promise<IFolder[]> {
    return await this.foldersModel.find(options).exec();
  }

  async findById(ID: string): Promise<IFolder> {
    return await this.foldersModel.findById(ID).exec();
  }

  async create(createFolderDto: CreateFolderDto): Promise<IFolder> {
    const createdFolder = new this.foldersModel(createFolderDto);
    return await createdFolder.save();
  }

  async update(ID: string, newValue: IFolder): Promise<IFolder> {
    const folder = await this.foldersModel.findById(ID).exec();
    if (!folder._id) {
      debug('Folder not found');
    }
    await this.foldersModel.findByIdAndUpdate(ID, newValue).exec();
    return await this.foldersModel.findById(ID).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.foldersModel.findByIdAndRemove(ID).exec();
      return 'The Folder has been deleted';
    } catch (err) {
      debug(err);
      return 'The Folder could not be deleted';
    }
  }
}
