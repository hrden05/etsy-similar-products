const mongoose = require('mongoose');

mongoose.connect('mongodb://database/etsy', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => { console.log('db connected'); },
  (err) => { console.log('error connecting to db', err); },
);
/* eslint prefer-destructuring: ["off", {VariableDeclarator: {object: true}}] */
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

module.exports = {
  Store,
  Product,
};
