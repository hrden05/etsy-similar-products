const db = require('../database/index.js');

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

const getStoreData = (productId, callback) => {
  getProductData(productId, (err, result) => {
    const storeId = result[0].store_id;
    db.Store
      .find({ store_id: storeId })
      .exec((error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
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

const getProductsFromStore = (productId, callback) => {
  getProductData(productId, (err, result) => {
    const storeId = result[0].store_id;
    db.Product
      .find({ store_id: storeId, product_id: { $ne: productId } })
      .limit(8)
      .exec((error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
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
