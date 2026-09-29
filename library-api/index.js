require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db.config');
/*
const app = express();
const PORT = process.env.PORT || 9000;
app.use(cors());
app.use(express.json());

// Base health route
app.get('/', (req, res) => {
  res.send('PERN API is operational....HBye Bye World!');
});

// Fetch all products
app.get('/products', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products WHERE product_id=2');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Database query error:', err.message);
    res.status(500).json({ error: 'Server error retrieving products' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
*/