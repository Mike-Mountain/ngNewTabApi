import * as mongoose from 'mongoose';

export const BookmarkSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  faviconUrl: String,
});