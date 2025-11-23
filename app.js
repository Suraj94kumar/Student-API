require('dotenv').config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/students', require('./routes/students'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});