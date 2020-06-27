import React from 'react';
import PropTypes from 'prop-types';

function AdsProductItem({ ad }) {
  return (
    <div className="ad-item">
      <div className="listing-background">
        <div className="listing-image-container">
          <img src={ad.image} alt="" className="listing-image" />
        </div>
        <div className="listing-card">
          <h3 className="product-name text-caption truncate light-weight">{ad.name}</h3>
          <p className="text-caption light-weight gray">Ad by {ad.store.name}</p>
          <p className="text-title">
            <span className="currency-symbol medium-weight">$</span>
            <span className="currency-value medium-weight">
              {ad.price}
              .00
            </span>
            <span className="shipping-container">
              {!ad.shipping ? <span /> : <span className={(ad.shipping === 'FREE shipping') ? 'shipping-free medium-weight' : 'shipping-eligible'}>{ad.shipping}</span>}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

AdsProductItem.propTypes = {
  ad: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.string,
    store: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

AdsProductItem.defaultProps = {
  ad: {},
};

export default AdsProductItem;
