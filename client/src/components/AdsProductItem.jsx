import React from 'react';
import PropTypes from 'prop-types';

function AdsProductItem({ ad }) {
  return (
    <li className="merch-item">
      <div className="listing-image-container">
        <img src={ad.image} alt="" className="listing-image" />
      </div>
      <div className="listing-card">
        <h3 className="product-name text-caption truncate">{ad.name}</h3>
        <p className="text-title">
          <span className="currency-symbol heavy-weight">$</span>
          <span className="currency-value heavy-weight">
            {ad.price}
            .00
          </span>
          <span className="shipping-container">
            {!ad.shipping ? <span /> : <span className={(ad.shipping === 'FREE shipping') ? 'shipping-free' : 'shipping-eligible'}>{ad.shipping}</span>}
          </span>
        </p>
      </div>
    </li>
  );
}

AdsProductItem.propTypes = {
  ad: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.string,
  }),
};

AdsProductItem.defaultProps = {
  ad: {},
};

export default AdsProductItem;
