const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { height, weight } = req.body;

  // Validation
  if (!height || !weight || height <= 0 || weight <= 0) {
    return res.status(400).json({ 
      error: 'Please provide valid positive numbers for height (meters) and weight (kg).' 
    });
  }

  // Calculate BMI
  const bmi = weight / (height * height);
  const roundedBmi = parseFloat(bmi.toFixed(2));

  // Determine Category
  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // Return response
  res.json({
    bmi: roundedBmi,
    category: category
  });
});

module.exports = router;
