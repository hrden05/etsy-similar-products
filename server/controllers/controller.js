const express = require('express');
const db = require('../database/index.js');
const model = require('../models/model.js');

const getStoreData = (req, res) => {
  model.getStoreData((err, results) => {
    if (err) {
      console.log('error getting all stores from db');
    } else {
      console.log('got stores from db');
      res.json({
        stores: results,
      });
    }
  });
};

const getProductData = (req, res) => {
  model.getProductData((err, results) => {
    if (err) {
      console.log('error getting all products from db');
    } else {
      console.log('got products from db');
      res.json({
        products: results,
      });
    }
  });
};

module.exports = {
  getStoreData,
  getProductData,
};
