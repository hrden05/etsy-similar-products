import React from 'react';
import axios from 'axios';
import AdsProductItem from './AdsProductItem.jsx';
import { currentProductId } from '../dummyData.js';

class AdsProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adProducts: [],
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    const currentproductId = currentProductId;
    axios.get(`api/ads/${currentproductId}`)
      .then((response) => {
        // console.log('ads', response.data);
        this.setState({
          adProducts: response.data.ads,
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
    const { error, isLoaded, adProducts } = this.state;
    if (error) {
      return <div className="ads-products">Error</div>;
    }
    if (!isLoaded) {
      return <div className="ads-products">Loading...</div>;
    }
    return (
      <div className="ads-products">
        <ul className="listings">
          {adProducts.map((ad) => <AdsProductItem ad={ad} key={ad.product_id} />)}
        </ul>
      </div>
    );
  }
}

export default AdsProductList;
