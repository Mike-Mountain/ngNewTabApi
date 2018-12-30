import { IUser } from './user.interface';

export interface IUserService {
  findAll(): Promise<IUser[]>;
  findById(ID: string): Promise<IUser | null>;
  findOne(options: object): Promise<IUser | null>;
  create(user: IUser): Promise<IUser>;
  update(ID: string, newValue: IUser): Promise<IUser | null>;
  delete(ID: string): Promise<string>;
}