const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/etsy', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => { console.log('db connected'); },
  (err) => { console.log('error connecting to db', err); },
);

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  store_id: Number,
  logo: String,
  items_count: Number,
  sales_count: Number,
  start_year: Number,
  location: String,
});

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  product_id: Number,
  price: Number,
  image: String,
  shipping: String,
  sponsored: Boolean,
  category: String,
  store_id: Number,
  store: { type: Schema.Types.ObjectId, ref: 'Store' },
});

const Store = mongoose.model('Store', storeSchema);
const Product = mongoose.model('Product', productSchema);

// Initial sample data
// const sampleStore = new Store({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'Etsy Store',
//   store_id: 200,
//   logo: 'https://i.etsystatic.com/isla/362517/41194900/isla_140x140.41194900_5nj8y8kp.jpg?version=0',
//   items_count: 50,
//   sales_count: 900,
//   start_year: 2010,
//   location: 'New York, NY',
// });

// sampleStore.save((err, result) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('sample store saved', result);

//     const sampleProduct = new Product({
//       _id: new mongoose.Types.ObjectId(),
//       name: 'Fine Art. Cactus',
//       product_id: 550,
//       price: 75.00,
//       image: 'https://i.etsystatic.com/6507355/r/il/58ee24/905514140/il_1140xN.905514140_17k6.jpg',
//       shipping: 'FREE Shipping',
//       sponsored: false,
//       category: 'Art',
//       store_id: 200,
//       store: sampleStore._id,
//     });

//     sampleProduct.save((error, results) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('sample product saved', results);
//       }
//     });
//   }
// });

module.exports = {
  Store,
  Product,
};
