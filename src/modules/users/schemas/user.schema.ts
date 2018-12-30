import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  _id: String,
  username: String,
  email: String,
  roles: Array,
});