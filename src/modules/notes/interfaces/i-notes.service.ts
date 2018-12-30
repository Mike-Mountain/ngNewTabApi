import {INote} from './notes.interface';

export interface INotesService {
  findAll(): Promise<INote[]>;
  findById(ID: string): Promise<INote | null>;
  find(options: object): Promise<INote[] | null>;
  create(todos: INote): Promise<INote>;
  update(ID: string, newValue: INote): Promise<INote | null>;
  delete(ID: string): Promise<string>;
}