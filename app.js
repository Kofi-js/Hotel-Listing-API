const express = require('express');
const connectDB = require('./db/db');
const { json } = require('express');
require('dotenv').config();
const app = express();

connectDB();

app.use(json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
