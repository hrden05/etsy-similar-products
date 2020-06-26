import React from 'react';

import AdsProductList from './AdsProductList.jsx';
import StoreSection from './StoreSection.jsx';
import SimilarProductList from './SimilarProductList.jsx';

const App = () => (
  <div className="whole-container">
    <StoreSection />
    <AdsProductList />
    <div className="similar-section">
      <div className="similar-description">
        <div>
          <h3 className="similar-header text-heading light-weight">You may also like</h3>
        </div>
        <p className="text-caption medium-weight black offset">
          <span>Shop more similar items</span>
          <span className="arrow">&#x2192;</span>
        </p>
      </div>
      <SimilarProductList />
    </div>
  </div>
);

export default App;
