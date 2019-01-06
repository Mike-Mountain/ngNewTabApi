import {IMessage} from './message.interface';

export interface IMessagesService {
  findAll(): Promise<IMessage[]>;
  findById(ID: string): Promise<IMessage | null>;
  find(options: object): Promise<IMessage[] | null>;
  create(todos: IMessage): Promise<IMessage>;
  update(ID: string, newValue: IMessage): Promise<IMessage | null>;
  delete(ID: string): Promise<string>;
}