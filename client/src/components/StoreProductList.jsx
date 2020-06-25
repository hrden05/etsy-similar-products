import React from 'react';
import axios from 'axios';
import StoreProductItem from './StoreProductItem.jsx';
import { currentProductId } from '../dummyData.js';

class StoreProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeProducts: [],
      isLoaded: false,
      error: null,
    };

    this.getStoreProducts = this.getStoreProducts.bind(this);
  }

  componentDidMount() {
    // get info about the current product, then about the current store
    const currentproductId = currentProductId;
    let currentStoreId;
    axios.get(`api/products/${currentproductId}`)
      .then((response) => {
        // console.log(response.data);
        currentStoreId = response.data.product.store_id;
        // this.getStoreInfo(currentStoreId);
        this.getStoreProducts(currentStoreId, currentProductId);
      })
      .catch((error) => error.message);
  }

  getStoreProducts(storeId, productId) {
    axios.get(`api/storeproducts/${storeId}-${productId}`)
      .then((response) => {
        // console.log('store products', response.data);
        this.setState({
          storeProducts: response.data.storeProducts,
          isLoaded: true,
        });
      })
      .catch((error) => {
        // console.log(error);
        // return error.message;
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    const { error, isLoaded, storeProducts } = this.state;
    if (error) {
      return <div className="store-products">Error</div>;
    }
    if (!isLoaded) {
      return <div className="store-products">Loading...</div>;
    }
    return (
      <div className="store-products">
        <ul className="listings">
          {storeProducts.map((prod) => <StoreProductItem product={prod} key={prod.product_id} />)}
        </ul>
      </div>
    );
  }
}

export default StoreProductList;
