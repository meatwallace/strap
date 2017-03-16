import mongoose from 'mongoose';

const User = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  googleId: { type: String },
  gender: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  google: { type: mongoose.Schema.Types.Mixed },
  facebook: { type: mongoose.Schema.Types.Mixed },
  facebookId: { type: String },
  permissions: { type: Array, default: [] },
  roles: { type: Array, default: [] },
}, {
  timestamps: true,
});

export default mongoose.model('User', User);
