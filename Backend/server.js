const express = require('express');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.get('/', (req, res) => {
  res.send('HOME');
  //res.send(req.header);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`-----Server started on port: ${PORT}------`)
);

module.exports = app;
