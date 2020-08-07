# Hipsy Similar Products

> Hipsy is an e-commerce site selling unique hand-crafted products. This project creates the similar products module (store information, store products, ads, and similar products) for the Hipsy product detail page. This project was developed as one micorservice for the entire product detail page in a service oriented architecture. Other related services (image carousel, product information, product description, and reviews) are all unified with this service via a proxy server.

## Demo

Hipsy product page with all services rendered together via a proxy server.

![Hipsy](https://i.ibb.co/cCZc12x/Screen-Shot-2020-08-01-at-1-56-07-PM.png)
![Demo video](hipsy_demo.gif)

Click the image below to watch a demo of the similar products service, showing its responsive design.

[![Hipsy Similar Products Demo](https://img.youtube.com/vi/rR_ECPC4_AU/hqdefault.jpg)](https://youtu.be/rR_ECPC4_AU)

## Technologies Used

  - React
  - Node
  - Express
  - MongoDB
  - Mongoose
  - Jest
  - Enzyme
  - CircleCI
  - Docker

## Related Projects

  - https://github.com/hrden05/hipsy-image-carouselmain
  - https://github.com/hrden05/etsy_topSidebar
  - https://github.com/hrden05/hipsty-product-details-main
  - https://github.com/hrden05/etsy_reviews
  - https://github.com/hrden05/proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Testing](#testing)

## Usage

To run this repo, you will need to install dependencies and run appropriate scripts.

## Requirements

- Node 6.13.0
- npm
- MongoDB

## Development

Executing the code below will install dependencies, seed the database, start the server, and start webpack. Examine the package.json file for additional scripts.

```
npm install
npm run seed
npm run server-dev
npm run react-dev
npm run test
```

### Testing

Unit tests built with Jest and Enzyme can be run with `npm run test`. To see test coverage, run `npm run test-coverage`.

