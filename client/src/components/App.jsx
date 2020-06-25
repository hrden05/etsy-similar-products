import React from 'react';
import axios from 'axios';

import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';
import { sampleStore, sampleProducts } from '../dummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeData: sampleStore,
      storeProducts: sampleProducts,
    };
  }

  componentDidMount() {
    const currentProductId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let currentStoreId;

    const getStoreInfo = (currentStoreId) => {
      axios.get(`api/stores/${currentStoreId}`)
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
    };

    const getStoreProducts = (currentStoreId, currentProductId) => {
      axios.get(`api/storeproducts/${currentStoreId}-${currentProductId}`)
        .then((response) => {
          console.log(response.data);
          this.setState({
            storeProducts: response.data.storeProducts.slice(0, 8),
          });
        })
        .catch((error) => {
          // console.log(error);
          return error.message;
        });
    };

    // get info about the current product, then about the current store
    axios.get(`api/products/${currentProductId}`)
      .then((response) => {
        console.log(response.data);
        currentStoreId = response.data.product.store_id;
        getStoreInfo(currentStoreId);
        getStoreProducts(currentStoreId, currentProductId);
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

export default App;
