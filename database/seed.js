const db = require('./index.js');
const faker = require('faker');

// seeding script

// drop database first
// db.dropDatabase();

// create 25 stores, add to array, use insertmany
const stores = [];

for (let i = 1; i <= 25; i++) {
  let store = new db.Store({
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

// create 100 products
const products = [];
const shippingOptions = ['FREE shipping', 'Free shipping eligible', ''];
const productCategories = ['clothing', 'art', 'jewelry', 'misc'];

for (let i = 1; i <= 100; i++) {
  let productCateory;
  if (i <= 25) {
    productCategory = productCategories[0];
  } else if (i <= 50) {
    productCategory = productCategories[1];
  } else if (i <= 75) {
    productCategory = productCategories[2];
  } else {
    productCategory = productCategories[3];
  }

  let product = new db.Product({
    _id: new mongoose.Types.ObjectId(),
    name: faker.commerce.productName(),
    product_id: i,
    price: faker.commerce.price(5.00, 250.00, 2),
    image: faker.image.imageUrl(),
    shipping: shippingOptions[faker.random.number({ min: 0, max: 2})],
    sponsored: faker.random.boolean(),
    category: productCategory,
    store_id: faker.random.number({ min: 1, max: 25}),
    store: sampleStore._id,
  });
  products.push(product);
}


const store = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Etsy Store',
  store_id: 200,
  logo: 'https://i.etsystatic.com/isla/362517/41194900/isla_140x140.41194900_5nj8y8kp.jpg?version=0',
  items_count: 50,
  sales_count: 900,
  start_year: 2010,
  location: 'New York, NY',
});

sampleStore.save((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('sample store saved', result);

    const product = {
      _id: new mongoose.Types.ObjectId(),
      name: 'Fine Art. Cactus',
      product_id: 550,
      price: 75.00,
      image: 'https://i.etsystatic.com/6507355/r/il/58ee24/905514140/il_1140xN.905514140_17k6.jpg',
      shipping: 'FREE Shipping',
      sponsored: false,
      category: 'Art',
      store_id: 200,
      store: sampleStore._id,
    });

    sampleProduct.save((error, results) => {
      if (error) {
        console.error(error);
      } else {
        console.log('sample product saved', results);
      }
    });
  }
});


// set up api to test faker
app.get('/api', function(req, res) {
  res.json([
      {
          title: faker.lorem.words(),
          author: faker.name.findName(),
          author_image: faker.image.avatar(),
          release_date: faker.date.recent(),
          image: faker.image.abstract(),
          price: faker.commerce.price(),
          short_description: faker.lorem.sentence(),
          long_description: faker.lorem.paragraph()
      }
  ])
});
