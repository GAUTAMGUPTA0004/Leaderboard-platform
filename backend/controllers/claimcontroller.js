const User = require('../models/user');
const History = require('../models/history');

const claimPoints = async (req, res) => {
  const { userId } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findByIdAndUpdate(
    userId,
    { $inc: { totalPoints: points } },
    { new: true }
  );

  const history = new History({ userId, pointsClaimed: points });
  await history.save();

  res.json({ user, points });
};

const getHistory = async (req, res) => {
  const history = await History.find().sort({ claimedAt: -1 }).populate('userId', 'name');
  res.json(history);
};

module.exports = { claimPoints, getHistory };
