import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: String, default: Date.now },
  updatedAt: { type: String, default: Date.now },
});

export default mongoose.model('Todo', Todo);
