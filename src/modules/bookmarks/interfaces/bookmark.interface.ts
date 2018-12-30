import {Document} from 'mongoose';

export interface IBookmark extends Document {
  readonly userId: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly faviconUrl: string;
}