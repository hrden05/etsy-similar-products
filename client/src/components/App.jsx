import React from 'react';

import AdsProductList from './AdsProductList.jsx';
import StoreSection from './StoreSection.jsx';
import SimilarProductList from './SimilarProductList.jsx';

const App = () => (
  <div className="whole-container">
    <StoreSection />
    <AdsProductList />
    <SimilarProductList />
  </div>
);

export default App;
