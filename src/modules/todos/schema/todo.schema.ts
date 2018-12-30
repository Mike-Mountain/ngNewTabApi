import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  userId: String,
  sid: String,
  createOn: Date,
  modifiedOn: Date,
  title: String,
  description: String,
  dueDate: Date,
  complete: Boolean,
});
