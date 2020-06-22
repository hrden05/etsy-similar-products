import React from 'react';

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

  render() {
    return (
      <div>
        <h1 className="title">Hello from App</h1>
        <StoreInfo storeData={this.state.storeData} />
        <StoreProductList storeProducts={this.state.storeProducts} />
      </div>
    );
  }
}

export default App;
