import React from 'react';

import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';

const StoreSection = () => (
  <div className="container">
    <div className="background-shape" />
    <div className="shop-overview">
      <StoreInfo />
      <StoreProductList />
    </div>
  </div>
);

export default StoreSection;
