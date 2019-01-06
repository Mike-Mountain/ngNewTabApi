import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  userId: String,
  origin: String,
  message: Object,
  error: Boolean,
  toDisplay: Boolean,
  operationType: String,
  time: Date,
  response: Object,
});