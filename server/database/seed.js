const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./index.js');

// --------- STORES -------------
// create 10 stores
const stores = [];

const createStoreData = () => {
  for (let i = 1; i <= 10; i += 1) {
    const store = new db.Store({
      _id: new mongoose.Types.ObjectId(),
      name: faker.lorem.word(),
      store_id: i,
      logo: faker.image.abstract(156, 156),
      items_count: faker.random.number({ min: 10, max: 1000 }),
      sales_count: faker.random.number({ min: 100, max: 10000 }),
      start_year: faker.random.number({ min: 2005, max: 2020 }),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    });
    stores.push(store);
  }
  console.log(`populating db with ${stores.length} stores `);

  stores.forEach((store) => {
    store.save((err) => {
      if (err) {
        console.log('error adding store to db');
      } else {
        console.log(`saved store ${store.store_id} in db`);
      }
    });
  });
};

// clear out Store collection, then invoke store creator function
db.Store.deleteMany({}, (err) => {
  if (err) {
    console.log('error deleting Store');
  } else {
    console.log('deleted Store data');
    createStoreData();
  }
});

// --------- PRODUCTS -------------
// create 100 products
const products = [];

const createProductData = () => {
  const shippingOptions = ['FREE shipping', 'Free shipping eligible', ''];
  let storeId = 1;
  let productCategory;

  // get stores objectId
  const getObjectIdForStore = (inputId) => {
    let resultId;
    stores.forEach((store) => {
      if (store.store_id === inputId) {
        /* eslint no-underscore-dangle: ["off", { "allow": ["foo_", "_bar"] }] */
        resultId = store._id;
      }
    });
    console.log(resultId);
    return resultId;
  };

  for (let i = 1; i <= 100; i += 1) {
    if (i <= 25) {
      productCategory = 'clothing';
    } else if (i <= 50) {
      productCategory = 'art';
    } else if (i <= 75) {
      productCategory = 'jewelry';
    } else {
      productCategory = 'misc';
    }

    const product = new db.Product({
      _id: new mongoose.Types.ObjectId(),
      name: faker.commerce.productName(),
      product_id: i,
      price: faker.commerce.price(5.00, 250.00, 2),
      image: faker.image.image(234, 186),
      shipping: shippingOptions[faker.random.number({ min: 0, max: 2 })],
      sponsored: faker.random.boolean(),
      category: productCategory,
      store_id: storeId,
      store: getObjectIdForStore(storeId),
    });
    products.push(product);
    if (i % 10 === 0) {
      storeId += 1;
    }
  }
  console.log(`populating db with ${products.length} products `);

  products.forEach((product) => {
    product.save((err) => {
      if (err) {
        console.log('error adding product to db');
      } else {
        console.log(`saved product ${product.product_id} in db`);
      }
    });
  });
};

// clear out Product collection, then invoke product creator function
db.Product.deleteMany({}, (err) => {
  if (err) {
    console.log('error deleting Product');
  } else {
    console.log('deleted Product data');
    createProductData();
  }
});

setTimeout(() => {
  process.exit();
}, 5000);
