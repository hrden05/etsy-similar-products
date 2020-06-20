import React from 'react';

import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeData: {},
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from App</h1>
        <StoreInfo />
        <StoreProductList />
      </div>
    );
  }
}

export default App;
