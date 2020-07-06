# Etsy Similar Products

> This project replicates the similar products module (store information, store products, ads, and similar products) of an Etsy item detail page. This project was developed as one service for a larger project of replicating an entire item detail page from Etsy in a service oriented architecture. Other related services (image carousel, product information, product description, and reviews) are all unified with this service via a proxy server.

## Demo

Click the image below to watch a demo of this project.

[![Etsy Similar Products Demo](https://img.youtube.com/vi/rR_ECPC4_AU/hqdefault.jpg)](https://youtu.be/rR_ECPC4_AU)

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

Executing the code above will install dependencies, seed the database, start the server, and start webpack. Examine the package.json file for additional scripts.

```
npm install
npm run seed
npm run server-dev
npm run react-dev
npm run test
```

### Testing

Unit tests built with Jest and Enzyme can be run with `npm run test`. To see test coverage, run `npm run test-coverage`.

