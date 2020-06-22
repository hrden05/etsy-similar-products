const express = require('express');
const db = require('../database/index.js');
const model = require('../models/model.js');

const getAllStoresData = (req, res) => {
  model.getAllStoresData((err, results) => {
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

const getStoreData = (req, res) => {
  const storeId = req.params.id;
  console.log(storeId);
  model.getStoreData(storeId, (err, results) => {
    if (err) {
      console.log('error getting a sigle store from db');
    } else {
      console.log('got store from db');
      res.json({
        store: results[0],
      });
    }
  });
};

const getAllProductsData = (req, res) => {
  model.getAllProductsData((err, results) => {
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

const getProductData = (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  model.getProductData(productId, (err, results) => {
    if (err) {
      console.log('error getting single product from db');
    } else {
      console.log('got product from db');
      res.json({
        product: results[0],
      });
    }
  });
};

const getProductsFromStore = (req, res) => {
  const storeId = req.params.storeId;
  const productId = req.params.productId;
  console.log(req.params);
  model.getProductsFromStore(storeId, productId, (err, results) => {
    if (err) {
      console.log('error getting store products from db');
    } else {
      console.log('got store products from db');
      res.json({
        storeProducts: results,
      });
    }
  });
};

module.exports = {
  getAllStoresData,
  getStoreData,
  getAllProductsData,
  getProductData,
  getProductsFromStore,
};
