const express = require('express');

const router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/stores', controller.getAllStoresData);
router.get('/stores/:id', controller.getStoreData);
router.get('/products', controller.getAllProductsData);
router.get('/products/:id', controller.getProductData);
router.get('/storeproducts/:storeId-:productId', controller.getProductsFromStore);
router.get('/ads/:productId', controller.getAdProducts);
router.get('/similar/:productId', controller.getSimilarProducts);

module.exports = router;
