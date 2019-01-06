import * as mongoose from 'mongoose';

export const FolderSchema = new mongoose.Schema({
  userId: String,
  folderFor: String,
  name: String,
  itemIds: Array,
  description: String,
  created: Date,
  iconUrl: String,
});