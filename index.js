const express = require('express');
const cors = require("cors");
const app = express();
const productRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');
require('dotenv').config();

const port = process.env.PORT || 3005;

app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
app.use(express.json());
app.use(productRouter);
app.use(categoryRouter);

app.get('/', (req, res) => {
  res.send('<p>Ecommerce Attempt</p>')
});

app.listen(port, () => {
  console.log('Listening on: ' + port);
});

