import mongoose from 'mongoose';

const User = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  googleId: { type: String, unique: true },
  facebookId: { type: String, unique: true },
}, {
  timestamps: true,
});

export default mongoose.model('User', User);
