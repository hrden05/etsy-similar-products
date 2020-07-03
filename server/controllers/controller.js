const model = require('../models/model.js');

const getStoreData = (req, res) => {
  const { productId } = req.query;
  // console.log(productId);
  // const {
  //   params: {
  //     productId,
  //   },
  // } = req;
  model.getStoreData(productId, (err, results) => {
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

const getProductsFromStore = (req, res) => {
  const { productId } = req.query;
  // const {
  //   params: {
  //     productId,
  //   },
  // } = req;
  model.getProductsFromStore(productId, (err, results) => {
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

const getAdProducts = (req, res) => {
  const { productId } = req.query;
  // const {
  //   params: {
  //     productId,
  //   },
  // } = req;
  model.getAdProducts(productId, (err, results) => {
    if (err) {
      console.log('error getting ads from db');
    } else {
      console.log('got ads from db');
      res.json({
        ads: results,
      });
    }
  });
};

const getSimilarProducts = (req, res) => {
  const { productId } = req.query;
  // const {
  //   params: {
  //     productId,
  //   },
  // } = req;
  model.getSimilarProducts(productId, (err, results) => {
    if (err) {
      console.log('error getting similar products from db');
    } else {
      console.log('got similar products from db');
      res.json({
        similar: results,
      });
    }
  });
};

module.exports = {
  getStoreData,
  getProductsFromStore,
  getAdProducts,
  getSimilarProducts,
};
