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
  getProductData(productId, (err, result) => {
    const storeId = result[0].store_id;
    db.Product
      .find({
        sponsored: true,
        product_id: { $ne: productId },
        store_id: { $ne: storeId },
      })
      .limit(12)
      .exec((error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
  });
};

const getSimilarProducts = (productId, callback) => {
  getProductData(productId, (err, result) => {
    const storeId = result[0].store_id;
    const categoryToMatch = result[0].category;
    // console.log('got product data within similar products', storeId, categoryToMatch);
    db.Product
      .find({
        sponsored: false,
        category: categoryToMatch,
        product_id: { $ne: productId },
        store_id: { $ne: storeId },
      })
      .limit(6)
      .exec((error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
  });
};

module.exports = {
  getAllStoresData,
  getStoreData,
  getAllProductsData,
  getProductData,
  getProductsFromStore,
  getAdProducts,
  getSimilarProducts,
};
