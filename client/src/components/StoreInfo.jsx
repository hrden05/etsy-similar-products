import React from 'react';
import axios from 'axios';

import { currentProductId } from '../dummyData.js';

class StoreInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeData: {},
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    const currentproductId = currentProductId;
    axios.get(`api/storeinfo/${currentproductId}`)
      .then((response) => {
        this.setState({
          storeData: response.data.store,
          isLoaded: true,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    const { error, isLoaded, storeData } = this.state;
    if (error) {
      return <div className="store-info">Error</div>;
    }
    if (!isLoaded) {
      return <div className="store-info">Loading...</div>;
    }
    return (
      <div className="store-info">
        <div className="store-logo">
          <img src={storeData.logo} alt="" className="logo-image" />
        </div>
        <div className="more-from">
          <p className="text-caption black">More from</p>
          <h2 className="text-heading link store-name">{storeData.name}</h2>
          <p className="text-caption heavy-weight black store-item-count">
            <span>
              {`See all ${storeData.items_count} items`}
            </span>
            <span className="arrow">&#x2192;</span>
          </p>
        </div>
        <div className="shop-stats">
          <div className="sales stats-box">
            <p className="text-caption gray">Sales</p>
            <p className="text-body black store-sales-count">{storeData.sales_count}</p>
          </div>
          <div className="year stats-box">
            <p className="text-caption gray">On Etsy since</p>
            <p className="text-body black store-start-year">{storeData.start_year}</p>
          </div>
        </div>
        <div className="based-in">
          <p className="text-caption gray">Based in</p>
          <h2 className="text-body black store-location">{storeData.location}</h2>
        </div>
      </div>
    );
  }
}

export default StoreInfo;
