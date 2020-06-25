import React from 'react';
import axios from 'axios';

import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';
import AdsProductList from './AdsProductList.jsx';
import StoreSection from './StoreSection.jsx';
import SimilarProductList from './SimilarProductList.jsx';
import { sampleStore, sampleProducts } from '../dummyData.js';

const currentProductId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let currentStoreId;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeData: sampleStore,
      storeProducts: sampleProducts,
      ads: sampleProducts,
      similarProducts: sampleProducts,
    };

    // this.getStoreProducts = this.getStoreProducts.bind(this);
    // this.getStoreInfo = this.getStoreInfo.bind(this);
  }

  // componentDidMount() {
  //   // get info about the current product, then about the current store
  //   axios.get(`api/products/${currentProductId}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       currentStoreId = response.data.product.store_id;
  //       this.getStoreInfo(currentStoreId);
  //       this.getStoreProducts(currentStoreId, currentProductId);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //       return error.message;
  //     });
  // }

  // getStoreProducts(storeId, productId) {
  //   axios.get(`api/storeproducts/${storeId}-${productId}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({
  //         storeProducts: response.data.storeProducts.slice(0, 8)
  //       });
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //       return error.message;
  //     });
  // }

  // getStoreInfo(storeId) {
  //   axios.get(`api/stores/${storeId}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({
  //         storeData: response.data.store,
  //       });
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //       return error.message;
  //     });
  // }

  render() {
    return (
      <div className="whole-container">
        <StoreSection />
        <div className="ads-section">
          <AdsProductList />
        </div>
        <div className="similar-section">
          <SimilarProductList />
        </div>
      </div>
    );
  }
}

export default App;
