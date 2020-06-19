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

app.get('/api/stores', (req, res) => {
  res.json([
    {
      _id: new mongoose.Types.ObjectId(),
      name: faker.lorem.word(),
      store_id: 10,
      logo: faker.image.abstract(),
      items_count: faker.random.number({ min: 10, max: 1000 }),
      sales_count: faker.random.number({ min: 100, max: 10000 }),
      start_year: faker.random.number({ min: 2005, max: 2020 }),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    },
  ]);
});

app.get('/api/products', (req, res) => {
  res.json([
    {
      _id: new mongoose.Types.ObjectId(),
      name: faker.company.companyName(),
      store_id: 10,
      logo: faker.image.abstract(),
      items_count: faker.random.number({ min: 10, max: 1000 }),
      sales_count: faker.random.number({ min: 100, max: 10000 }),
      start_year: faker.random.number({ min: 2005, max: 2020 }),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    },
  ]);
});
