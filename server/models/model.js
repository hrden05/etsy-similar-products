const express = require('express');
const db = require('../database/index.js');

const getAllStoresData = (callback) => {
  const query = db.Store.find();
  query.exec((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getStoreData = (storeId, callback) => {
  const query = db.Store.find({ store_id: storeId });
  query.exec((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getAllProductsData = (callback) => {
  const query = db.Product.find();
  query.exec((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getProductData = (productId, callback) => {
  const query = db.Product.find({ product_id: productId });
  query.exec((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getProductsFromStore = (storeId, productId, callback) => {
  db.Product
    .find({ store_id: storeId, product_id: { $ne: productId } })
    .limit(8)
    .exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
};

const getAdProducts = (productId, callback) => {
  db.Product
    .find({ sponsored: true, product_id: { $ne: productId } })
    .limit(12)
    .exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
};

module.exports = {
  getAllStoresData,
  getStoreData,
  getAllProductsData,
  getProductData,
  getProductsFromStore,
  getAdProducts,
};
