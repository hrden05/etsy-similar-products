const express = require('express');

const app = express();
const db = require('../database/index.js');

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});

// tests for getting data in db
app.get('/api/stores', (req, res) => {
  const query = db.Store.find();
  query.exec((err, results) => {
    if (err) {
      console.log('error getting all stores from db');
    } else {
      console.log('got stores from db');
      res.json({
        stores: results,
      });
    }
  });
});

app.get('/api/products', (req, res) => {
  const query = db.Product.find();
  query.exec((err, results) => {
    if (err) {
      console.log('error getting all products from db');
    } else {
      console.log('got products from db');
      res.json({
        products: results,
      });
    }
  });
});
