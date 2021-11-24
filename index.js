require('dotenv').config();
const express = require('express')();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT;

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    express.listen(PORT, () =>
      console.log(`Sertver started on PORT = ${PORT}`),
    );
  } catch (e) {
    console.error(e);
  }
};

express.get('/', (res, req) => {
  req.status(200).type('text/plan');
  req.send('Home Page');
});

start();
