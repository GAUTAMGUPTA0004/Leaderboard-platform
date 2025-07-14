// === Import Dependencies ===
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// === Initialize App ===
const app = express();

// === Middleware ===
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // To allow cross-origin requests from frontend

// === Connect to MongoDB Atlas ===
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// === Import Route Controllers ===
const { getUsers, addUser } = require('./controllers/usercontroller');
const { claimPoints, getHistory } = require('./controllers/claimcontroller');

// === API Routes ===
app.get('/users', getUsers);          // Get all users sorted by points
app.post('/users', addUser);          // Add a new user
app.post('/claim/:userId', claimPoints); // Claim random points for user
app.get('/history', getHistory);      // Get full claim history

// === Start the Server ===
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
