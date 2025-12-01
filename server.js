const express = require('express');
const cors = require('cors');
const bmiRoutes = require('./routes/bmi');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Request received: ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use('/api/bmi', bmiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('BMI Calculator API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
