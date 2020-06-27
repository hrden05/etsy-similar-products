import React from 'react';
import PropTypes from 'prop-types';

function StoreProductItem({ product }) {
  return (
    <div className="store-item">
      <div className="listing-background">
        <div className="listing-image-container">
          <img src={product.image} alt="" className="listing-image" />
        </div>
        <div className="listing-card">
          <h3 className="product-name text-caption truncate light-weight">{product.name}</h3>
          <p className="text-title">
            <span className="price medium-weight">
              $
              {product.price}
              .00
            </span>
            <span className="shipping-container">
              {!product.shipping ? <span /> : <span className={(product.shipping === 'FREE shipping') ? 'shipping-free medium-weight' : 'text-caption truncate light-weight gray'}>{product.shipping}</span>}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

StoreProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.string,
  }),
};

StoreProductItem.defaultProps = {
  product: {},
};

export default StoreProductItem;
