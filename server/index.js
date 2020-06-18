const express = require('express');

const app = express();
const db = require('../database/index.js');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
