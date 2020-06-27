import React from 'react';
import axios from 'axios';

import { currentProductId } from '../dummyData.js';
import { arrow } from '../SVGIcons.jsx';

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
        <div className="top-store-info">
          <div className="store-logo">
            <img src={storeData.logo} alt="" className="logo-image" />
          </div>
          <div className="more-from">
            <p className="text-caption light-weight black">More from</p>
            <h2 className="text-heading light-weight link store-name truncate black">{storeData.name}</h2>
            <p className="text-caption medium-weight black store-item-count">
              <span>
                {`See all ${storeData.items_count} items`}
              </span>
              <span className="arrow-container">{arrow}</span>
            </p>
          </div>
        </div>
        <div className="bottom-store-info">
          <div className="sales stats-box">
            <p className="text-caption light-weight gray">Sales</p>
            <p className="text-body light-weight black store-sales-count">{storeData.sales_count}</p>
          </div>
          <div className="year stats-box">
            <p className="text-caption light-weight gray">On Etsy since</p>
            <p className="text-body light-weight black store-start-year">{storeData.start_year}</p>
          </div>
          <div className="based-in">
            <p className="text-caption light-weight gray">Based in</p>
            <h2 className="text-body light-weight black store-location">{storeData.location}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreInfo;
