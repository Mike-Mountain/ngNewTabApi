import {IFolder} from './folder.interface';

export interface IFoldersService {
  findAll(): Promise<IFolder[]>;
  findById(ID: string): Promise<IFolder | null>;
  find(options: object): Promise<IFolder[] | null>;
  create(folders: IFolder): Promise<IFolder>;
  update(ID: string, newValue: IFolder): Promise<IFolder | null>;
  delete(ID: string): Promise<string>;
}