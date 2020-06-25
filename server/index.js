const express = require('express');
const morgan = require('morgan');
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

// create server on port 3000
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
