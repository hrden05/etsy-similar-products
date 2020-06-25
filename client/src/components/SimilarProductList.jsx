import React from 'react';
import axios from 'axios';
import SimilarProductItem from './SimilarProductItem.jsx';
import { currentProductId } from '../dummyData.js';

class SimilarProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simProducts: [],
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    const currentproductId = currentProductId;
    axios.get(`api/similar/${currentproductId}`)
      .then((response) => {
        this.setState({
          simProducts: response.data.similar,
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
    const { error, isLoaded, simProducts } = this.state;
    if (error) {
      return <div className="similar-products">Error</div>;
    }
    if (!isLoaded) {
      return <div className="similar-products">Loading...</div>;
    }
    return (
      <div className="similar-products">
        <ul className="similar-listings">
          {simProducts.map((prod) => <SimilarProductItem product={prod} key={prod.product_id} />)}
        </ul>
      </div>
    );
  }
}

export default SimilarProductList;
