import React from 'react';
import axios from 'axios';

import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';
// import App from './App.jsx';
import { sampleStore, sampleProducts, currentProductId } from '../dummyData.js';

class StoreSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeData: sampleStore,
      storeProducts: sampleProducts,
      isLoaded: false,
      error: null,
    };

    this.getStoreProducts = this.getStoreProducts.bind(this);
    this.getStoreInfo = this.getStoreInfo.bind(this);
  }

  componentDidMount() {
    // get info about the current product, then about the current store
    const currentproductId = currentProductId;
    let currentStoreId;
    axios.get(`api/products/${currentproductId}`)
      .then((response) => {
        console.log(response.data);
        currentStoreId = response.data.product.store_id;
        this.getStoreInfo(currentStoreId);
        this.getStoreProducts(currentStoreId, currentProductId);
      })
      .catch((error) => {
        // console.log(error);
        return error.message;
      });
  }

  getStoreProducts(storeId, productId) {
    axios.get(`api/storeproducts/${storeId}-${productId}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          storeProducts: response.data.storeProducts.slice(0, 8),
          isLoaded: true,
        });
      })
      .catch((error) => {
        // console.log(error);
        return error.message;
      });
  }

  getStoreInfo(storeId) {
    axios.get(`api/stores/${storeId}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          storeData: response.data.store,
        });
      })
      .catch((error) => {
        // console.log(error);
        return error.message;
      });
  }

  render() {
    return (
      <div className="container">
        <div className="background-shape" />
        <div className="shop-overview">
          <StoreInfo storeData={this.state.storeData} />
          <StoreProductList storeProducts={this.state.storeProducts} />
        </div>
      </div>
    );
  }
}

export default StoreSection;
