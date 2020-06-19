const express = require('express');

const app = express();
const mongoose = require('mongoose');
const faker = require('faker');
const db = require('../database/index.js');

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});

// tests for getting data in db
app.get('/api/stores', (req, res) => {
  let query = db.Store.find();
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
  let query = db.Product.find();
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

// tests for faker data
// app.get('/api/stores', (req, res) => {
//   res.json([
//     {
//       _id: new mongoose.Types.ObjectId(),
//       name: faker.lorem.word(),
//       store_id: 10,
//       logo: faker.image.abstract(),
//       items_count: faker.random.number({ min: 10, max: 1000 }),
//       sales_count: faker.random.number({ min: 100, max: 10000 }),
//       start_year: faker.random.number({ min: 2005, max: 2020 }),
//       location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
//     },
//   ]);
// });

// app.get('/api/products', (req, res) => {
//   const shippingOptions = ['FREE shipping', 'Free shipping eligible', ''];
//   const productCategories = ['clothing', 'art', 'jewelry', 'misc'];

//   res.json([
//     {
//       _id: new mongoose.Types.ObjectId(),
//       name: faker.commerce.productName(),
//       product_id: 15,
//       price: faker.commerce.price(5.00, 250.00, 2),
//       image: faker.image.image(),
//       shipping: shippingOptions[faker.random.number({ min: 0, max: 2 })],
//       sponsored: faker.random.boolean(),
//       category: productCategories[faker.random.number({ min: 0, max: 3 })],
//       store_id: faker.random.number({ min: 1, max: 25 }),
//       store: new mongoose.Types.ObjectId(),
//     },
//   ]);
// });
