import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITodo, ITodosService } from './interfaces';
import { CreateTodoDto } from './dto/createTodo.dto';
import { debug } from 'console';

@Injectable()
export class TodosService implements ITodosService {
  constructor(@InjectModel('Todos') private readonly todoModel: Model<ITodo>) {
  }

  async findAll(): Promise<ITodo[]> {
    return await this.todoModel.find().exec();
  }

  async find(options: object): Promise<ITodo[]> {
    return await this.todoModel.find(options).exec();
  }

  async findById(ID: string): Promise<ITodo> {
    return await this.todoModel.findById(ID).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<ITodo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: ITodo): Promise<ITodo> {
    const todo = await this.todoModel.findById(ID).exec();
    if (!todo._id) {
      debug('todo not found');
    }
    debug('NEWVALUE || :', newValue);
    await this.todoModel.findOneAndUpdate(ID, {
      sid: newValue.sid,
      modifiedOn: newValue.modifiedOn,
      title: newValue.title,
      description: newValue.description,
      dueDate: newValue.dueDate,
      complete: newValue.complete,
      folder: newValue.folder,
    }).exec();
    return await this.todoModel.findById(ID).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.todoModel.findByIdAndDelete(ID).exec();
      return 'The todo has been deleted';
    } catch (err) {
      debug(err);
      return 'The todo could not be deleted';
    }
  }
}
