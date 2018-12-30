import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  sid: String,
  title: String,
  body: String,
  created: Date,
  modifiedOn: Date,
});
