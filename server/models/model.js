const express = require('express');
const db = require('../database/index.js');

const getStoreData = (callback) => {
  const query = db.Store.find();
  query.exec((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getProductData = (callback) => {
  const query = db.Product.find();
  query.exec((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getStoreData,
  getProductData,
};
