import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser, IUserService } from './interfaces';
import { CreateUserDto } from './dto/createUser.dto';
import { debug } from 'console';

@Injectable()
export class UsersService implements IUserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  async findOne(options: object): Promise<IUser> {
    return await this.userModel.findOne(options).exec();
  }

  async findById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async update(id: string, newValue: IUser): Promise<IUser> {
    const user = await this.userModel.findById(id).exec();
    if (!user.id) {
      debug('No user with that ID found.');
    }

    return await this.userModel.findByIdAndUpdate(id, newValue).exec();
  }

  async delete(id: string): Promise<string> {
    try {
      await this.userModel.findByIdAndRemove(id).exec();
      return 'The User has been deleted';
    } catch (error) {
      debug(error);
      return `The User could not be deleted: ${error}`;
    }
  }

}
