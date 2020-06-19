const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./index.js');

// seeding script

// drop database first
// db.dropDatabase((err, result) => {
//   if (err) {
//     console.log('error dropping db');
//   } else {
//     console.log('dropped db');
//   }
// });

// create 25 stores
const stores = [];

for (let i = 1; i <= 25; i += 1) {
  const store = new db.Store({
    _id: new mongoose.Types.ObjectId(),
    name: faker.lorem.word(),
    store_id: i,
    logo: faker.image.abstract(),
    items_count: faker.random.number({ min: 10, max: 1000 }),
    sales_count: faker.random.number({ min: 100, max: 10000 }),
    start_year: faker.random.number({ min: 2005, max: 2020 }),
    location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  });
  stores.push(store);
}

console.log(`populating db with ${stores.length} stores `);

// create 100 products
const products = [];
const shippingOptions = ['FREE shipping', 'Free shipping eligible', ''];
const productCategories = ['clothing', 'art', 'jewelry', 'misc'];

for (let i = 1; i <= 100; i += 1) {
  let productCategory;
  if (i <= 25) {
    productCategory = productCategories[0];
  } else if (i <= 50) {
    productCategory = productCategories[1];
  } else if (i <= 75) {
    productCategory = productCategories[2];
  } else {
    productCategory = productCategories[3];
  }

  const product = new db.Product({
    _id: new mongoose.Types.ObjectId(),
    name: faker.commerce.productName(),
    product_id: i,
    price: faker.commerce.price(5.00, 250.00, 2),
    image: faker.image.image(),
    shipping: shippingOptions[faker.random.number({ min: 0, max: 2 })],
    sponsored: faker.random.boolean(),
    category: productCategory,
    store_id: faker.random.number({ min: 1, max: 25 }),
    // store: stores[faker.random.number({ min: 1, max: 25 })][_id],
  });
  products.push(product);
}

console.log(`populating db with ${products.length} products `);

// iterate over both the stores and products arrays to add each item to the db
stores.forEach((store) => {
  store.save((err, result) => {
    if (err) {
      console.log('error adding store to db');
    } else {
      console.log(`saved store ${store.store_id} in db`);
    }
  });
});

products.forEach((product) => {
  product.save((err, result) => {
    if (err) {
      console.log('error adding product to db');
    } else {
      console.log(`saved product ${product.product_id} in db`);
    }
  });
});
