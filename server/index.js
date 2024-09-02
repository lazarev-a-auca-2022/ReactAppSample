// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'shopdb',
  password: 'password',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/cart', async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO cart (name, price, image) VALUES ($1, $2, $3) RETURNING *',
      [name, price, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/cart', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cart');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});