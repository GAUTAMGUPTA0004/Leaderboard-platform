const User = require('../models/user');

const getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

const addUser = async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.json(user);
};

module.exports = { getUsers, addUser };