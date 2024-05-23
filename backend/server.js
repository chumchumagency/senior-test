const express = require('express');
const cors = require("cors")
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

require('dotenv').config();

// Connect Database
connectDB();

// Init Middleware
app.use(cors())
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
