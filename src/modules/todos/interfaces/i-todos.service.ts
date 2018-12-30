import { ITodo } from './todos.interface';

export interface ITodosService {
  findAll(): Promise<ITodo[]>;
  findById(ID: string): Promise<ITodo | null>;
  findOne(options: object): Promise<ITodo | null>;
  create(todos: ITodo): Promise<ITodo>;
  update(ID: string, newValue: ITodo): Promise<ITodo | null>;
  delete(ID: string): Promise<string>;
}