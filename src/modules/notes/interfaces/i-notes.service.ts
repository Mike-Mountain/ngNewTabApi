import {INote} from './notes.interface';

export interface INotesService {
  findAll(): Promise<INote[]>;
  findById(Iid: string): Promise<INote | null>;
  find(options: object): Promise<INote[] | null>;
  create(todos: INote): Promise<INote>;
  update(id: string, newValue: INote): Promise<INote | null>;
  delete(id: string): Promise<string>;
}