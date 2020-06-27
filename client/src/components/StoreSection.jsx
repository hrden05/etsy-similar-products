import React from 'react';

import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';
import { topborder } from '../SVGIcons.jsx';

const StoreSection = () => (
  <div className="wrapper">
    <div className="background-shape">
      <span className="top-border">{topborder}</span>
    </div>
    <div className="store-container">
      <div className="shop-overview">
        <StoreInfo />
        <StoreProductList />
      </div>
    </div>
  </div>
);

export default StoreSection;
