import React from 'react';

import AdsProductList from './AdsProductList.jsx';
import StoreSection from './StoreSection.jsx';
import SimilarProductList from './SimilarProductList.jsx';

const App = () => (
  <div className="whole-container">
    <StoreSection />
    <div className="ads-section">
      <div className="ads-description">
          <button>
            <span>Ads</span>
            <span>&#63;</span>
          </button>
      </div>
      <AdsProductList />
    </div>
    <div className="similar-section">
      <SimilarProductList />
    </div>
  </div>
);

export default App;
