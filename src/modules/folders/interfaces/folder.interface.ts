import {Document} from 'mongoose';

export interface IFolder extends Document {
  readonly userId: string;
  readonly folderFor: string;
  readonly name: string;
  readonly itemIds: Array<string>;
  readonly description: string;
  readonly created: Date;
  readonly iconUrl: string;
}