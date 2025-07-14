const mongoose = require('mongoose');

// Schema for storing history of each point claim
const HistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pointsClaimed: Number,
  claimedAt: { type: Date, default: Date.now }
});

// Export History model based on HistorySchema
module.exports = mongoose.model('History', HistorySchema);
