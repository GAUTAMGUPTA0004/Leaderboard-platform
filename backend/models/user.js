const mongoose = require('mongoose');

// Schema defines structure of a user document
const UserSchema = new mongoose.Schema({
  name: String,
  totalPoints: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Export User model based on UserSchema
module.exports = mongoose.model('User', UserSchema);