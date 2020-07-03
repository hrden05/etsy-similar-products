const express = require('express');

const router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/storeinfo', controller.getStoreData);
router.get('/storeproducts', controller.getProductsFromStore);
router.get('/ads', controller.getAdProducts);
router.get('/similar', controller.getSimilarProducts);

module.exports = router;
