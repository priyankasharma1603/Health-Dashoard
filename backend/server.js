// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const healthRecordsRouter = require('./routes/healthRecords');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb+srv://priyanka:0000@free.bih1v.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check database connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err);
});

// Routes
app.use('/health-records', healthRecordsRouter);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
