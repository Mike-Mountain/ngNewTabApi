import {Document} from 'mongoose';

export interface IMessage extends Document {
  readonly userId: string;
  readonly origin: string;
  readonly message: any;
  readonly error: boolean;
  readonly toDisplay: boolean;
  readonly operationType: string;
  readonly time: Date;
  readonly response: any;
}