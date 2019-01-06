import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { INote, INotesService } from './interfaces';
import { CreateNoteDto } from './dto/createNote.dto';
import { debug } from 'console';

@Injectable()
export class NotesService implements INotesService {

  constructor(@InjectModel('Notes') private readonly notesModel: Model<INote>) {
  }

  async findAll(): Promise<INote[]> {
    return await this.notesModel.find().exec();
  }

  async find(options: object): Promise<INote[]> {
    return await this.notesModel.find(options).exec();
  }

  async findById(id: string): Promise<INote> {
    return await this.notesModel.findById(id).exec();
  }

  async create(createNoteDto: CreateNoteDto): Promise<INote> {
    const createdNote = new this.notesModel(createNoteDto);
    return await createdNote.save();
  }

  async update(ID: string, newValue: INote): Promise<INote> {
    const todo = await this.notesModel.findById(ID).exec();
    if (!todo._id) {
      debug('todo not found');
    }
    await this.notesModel.findByIdAndUpdate(ID, newValue).exec();
    return await this.notesModel.findById(ID).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.notesModel.findByIdAndDelete(ID).exec();
      return 'The todo has been deleted';
    } catch (err) {
      debug(err);
      return 'The todo could not be deleted';
    }
  }
}
