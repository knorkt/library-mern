const express = require('express');
const cors = require('cors');
const apiRoutes = require('./route');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// API Namespace
app.use('/api/v1', apiRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;