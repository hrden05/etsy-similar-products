import React from 'react';
import PropTypes from 'prop-types';

function SimilarProductItem({ product }) {
  return (
    <li className="merch-item">
      <div className="listing-image-container">
        <img src={product.image} alt="" className="listing-image" />
      </div>
      <div className="listing-card">
        <h3 className="product-name text-caption truncate">{product.name}</h3>
        <p className="text-title">
          <span className="currency-symbol heavy-weight">$</span>
          <span className="currency-value heavy-weight">
            {product.price}
            .00
          </span>
          <span className="shipping-container">
            {!product.shipping ? <span /> : <span className={(product.shipping === 'FREE shipping') ? 'shipping-free' : 'shipping-eligible'}>{product.shipping}</span>}
          </span>
        </p>
      </div>
    </li>
  );
}

SimilarProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.string,
  }),
};

SimilarProductItem.defaultProps = {
  product: {},
};

export default SimilarProductItem;
