import mongoose from 'mongoose';

const User = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: String, default: Date.now },
  updatedAt: { type: String, default: Date.now },
});

export default mongoose.model('User', User);
