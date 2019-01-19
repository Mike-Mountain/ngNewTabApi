import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  userId: String,
  sid: String,
  title: String,
  body: String,
  created: Date,
  modifiedOn: Date,
  folder: String,
});
