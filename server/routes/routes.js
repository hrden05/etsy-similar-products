const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/stores', controller.getStoreData);
router.get('/products', controller.getProductData);

module.exports = router;
