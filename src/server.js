const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors()); // Enable CORS for all routes and origins

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/organizasso")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Registration route
app.post("/register", async (req, res) => {
  const { name, surname, username, email, telephone, password } = req.body;
  try {
    const user = await User.create({
      name,
      surname,
      username,
      email,
      telephone,
      password,
    });
    res.status(201).json({ userId: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json({
      userId: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      username: user.username,
      telephone: user.telephone,
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
