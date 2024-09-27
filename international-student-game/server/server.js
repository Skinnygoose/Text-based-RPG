const express = require("express");
const connectDB = require("./config/db"); // Database connection
const storyRoutes = require("./routes/storyRoutes"); // Story routes
const questionRoutes = require("./routes/questionRoutes"); // Question routes
const cors = require("cors");

const app = express();
connectDB(); // Connect to MongoDB

const PORT = process.env.PORT || 5000;

// CORS Middleware
/*
app.use(
  cors({
    origin: "http://localhost:3000", // Allow your front-end origin
    credentials: true, // Enable set cookie
  })
);*/

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Middleware to parse JSON bodies
app.use(express.json()); 

// Use routes
app.use("/api/stories", storyRoutes); // Story routes
app.use("/api/cards", questionRoutes); // Question card routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
