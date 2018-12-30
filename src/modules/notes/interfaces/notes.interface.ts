import {Document} from 'mongoose';

export interface INote extends Document {
  readonly sid: string;
  readonly title: string;
  readonly body: string;
  readonly created: Date;
  readonly modified: Date;
}