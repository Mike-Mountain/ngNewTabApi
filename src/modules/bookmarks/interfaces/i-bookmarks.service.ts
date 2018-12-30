import {IBookmark} from './bookmark.interface';

export interface IBookmarksService {
  findAll(): Promise<IBookmark[]>;
  findById(ID: string): Promise<IBookmark | null>;
  findOne(options: object): Promise<IBookmark | null>;
  create(todos: IBookmark): Promise<IBookmark>;
  update(ID: string, newValue: IBookmark): Promise<IBookmark | null>;
  delete(ID: string): Promise<string>;
}