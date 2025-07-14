🏆 Leaderboard Platform
A full-stack web application that allows users to claim random points and compete on a dynamic leaderboard. Built with React.js frontend and Node.js backend with MongoDB database.
🚀 Features

User Management: Add new users or select from existing ones
Point Claiming: Claim random points (1-10) for selected users
Real-time Leaderboard: Dynamic ranking based on total points
Claim History: Track all point claims with timestamps
Responsive Design: Mobile-friendly interface
Live Updates: Leaderboard updates instantly after each claim

🛠️ Tech Stack
Frontend

React.js - UI framework
Vite - Build tool and development server
Axios - HTTP client for API calls
CSS3 - Styling and responsive design

Backend

Node.js - Runtime environment
Express.js - Web framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling
CORS - Cross-origin resource sharing

📋 Prerequisites
Before running this application, make sure you have the following installed:

Node.js (v14 or higher)
npm or yarn package manager
MongoDB Atlas account (or local MongoDB instance)

🚀 Installation & Setup
1. Clone the Repository
bashgit clone <repository-url>
cd leaderboard-platform
2. Backend Setup
bashcd backend
npm install
Create a .env file in the backend directory:
envPORT=3001
MONGO_URL=your_mongodb_connection_string
Start the backend server:
bashnpm run dev
3. Frontend Setup
bashcd Frontend
npm install
Start the frontend development server:
bashnpm run dev
The application will be available at http://localhost:5173
🌐 API Endpoints
User Management

GET /users - Get all users sorted by total points
POST /users - Add a new user
json{
  "name": "User Name"
}


Point Claiming

POST /claim/:userId - Claim random points for a user
GET /history - Get complete claim history

📊 Database Schema
User Schema
javascript{
  _id: ObjectId,
  name: String,
  totalPoints: Number (default: 0),
  createdAt: Date (default: Date.now)
}
History Schema
javascript{
  _id: ObjectId,
  userId: ObjectId (ref: 'User'),
  pointsClaimed: Number,
  claimedAt: Date (default: Date.now)
}
🎮 How to Use

Select a User: Choose from the dropdown list of existing users
Add New User: Enter a name and click "Add User" to create a new participant
Claim Points: Click the "🎯 Claim Points" button to award random points (1-10)
View Rankings: Check the leaderboard to see current standings
Track History: Monitor all point claims and their timestamps

📱 Screenshots
Main Interface

Clean, modern design with gradient background
User selection dropdown with add user functionality
Prominent claim points button
Real-time leaderboard table

Features Showcase

Responsive Design: Works on desktop and mobile devices
Visual Feedback: Success messages when points are claimed
Dynamic Updates: Leaderboard refreshes automatically
User-Friendly: Intuitive interface with emojis and clear labeling

🔧 Development
Available Scripts
Backend

npm start - Start production server
npm run dev - Start development server with nodemon

Frontend

npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build
npm run lint - Run ESLint

Project Structure
leaderboard-platform/
├── Frontend/                 # React.js frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── assets/          # Static assets
│   │   └── App.jsx          # Main application component
│   ├── public/              # Public assets
│   └── package.json
├── backend/                 # Node.js backend
│   ├── controllers/         # Route controllers
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
🌟 Key Components
Frontend Components

App.jsx - Main application logic and state management
UserSelector.jsx - User selection and addition functionality
Leaderboard.jsx - Dynamic ranking display
ClaimInfo.jsx - Point claim feedback

Backend Controllers

usercontroller.js - User management operations
claimcontroller.js - Point claiming and history tracking

🚀 Deployment
The application is currently deployed on:

Backend: Render.com (https://leaderboard-platform.onrender.com)
Frontend:  deployed on Vercel-(https://leaderboard-platform.vercel.app/)

Environment Variables
Make sure to set the following environment variables for production:

PORT - Server port (default: 3001)
MONGO_URL - MongoDB connection string
