const express = require('express');
const morgan = require('morgan');
const db = require('./database/index.js');
const router = require('./routes/routes.js');

const PORT = 3000;
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// serve static assets
app.use(express.static('public'));

// router
app.use('/api', router);

// tests for getting data in db
// app.get('/api/stores', (req, res) => {
//   const query = db.Store.find();
//   query.exec((err, results) => {
//     if (err) {
//       console.log('error getting all stores from db');
//     } else {
//       console.log('got stores from db');
//       res.json({
//         stores: results,
//       });
//     }
//   });
// });

// app.get('/api/products', (req, res) => {
//   const query = db.Product.find();
//   query.exec((err, results) => {
//     if (err) {
//       console.log('error getting all products from db');
//     } else {
//       console.log('got products from db');
//       res.json({
//         products: results,
//       });
//     }
//   });
// });

// create server on port 3000
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
