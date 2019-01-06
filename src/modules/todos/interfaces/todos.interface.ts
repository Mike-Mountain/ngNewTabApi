import {Document} from 'mongoose';

export interface ITodo extends Document {
  readonly userId: string;
  readonly sid: string;
  readonly createdOn: Date;
  readonly modifiedOn: Date;
  readonly title: string;
  readonly description: string;
  readonly dueDate: Date;
  readonly complete: boolean;
  readonly folder: string;
}
